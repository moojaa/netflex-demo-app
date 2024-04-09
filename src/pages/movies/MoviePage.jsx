import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovies'
import { useSearchParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/movieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'
import {Spinner} from 'react-bootstrap'

const MoviePage = () => {

  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }
  const keyword = query.get("q")
  const { data, isLoading, isError, error } = useSearchMovieQuery(keyword,page)

  if (isLoading) {
    return <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="danger" /></div>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => <Col key={index} lg={4} xs={12} className='d-flex justify-content-center'>
              <MovieCard movie={movie} />
            </Col>)}
          </Row>
          <ReactPaginate

            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={data?.total_pages}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link bg-dark border-dark text-white"
            previousClassName="page-item"
            previousLinkClassName="page-link bg-dark border-dark text-white"
            nextClassName="page-item"
            nextLinkClassName="page-link bg-dark border-dark text-white"
            breakLabel="..."
            breakClassName="page-item "
            breakLinkClassName="page-link bg-dark border-dark text-white"
            containerClassName="pagination d-flex justify-content-center pt-5"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage