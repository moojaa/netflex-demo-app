import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovies'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useSearchParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col, Button,Dropdown } from 'react-bootstrap'
import MovieCard from '../../common/movieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'
import { Spinner } from 'react-bootstrap'

const MoviePage = () => {

  const [query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const [dropDownGenre,setDropDownGenre] =useState('장르')
  const [dropDownOrder,setDropDownOrder] =useState('정렬기준')

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }
  const keyword = query.get("q")
  const { data, isLoading, isError, error } = useSearchMovieQuery(keyword, page)
  const { data: genreData } = useMovieGenreQuery()

  const [sortedData,setSortedData] = useState([])

  useEffect(()=>{
    if(data?.results){
      setSortedData(data.results)
    }
  },[data])

  const orderPopular=()=>{
    if(!data?.results) return;
    const sorted =[...data.results].sort((a,b)=>b.popularity - a.popularity);
    setSortedData(sorted)
    setDropDownOrder('인기 많은순')
    setDropDownGenre('장르')
  }

  const reversePopular=()=>{
    if(!data?.results) return;
    const sorted =[...data.results].sort((a,b)=>a.popularity - b.popularity);
    setSortedData(sorted)
    setDropDownOrder('인기 적은순')
    setDropDownGenre('장르')
  }

  const genreOn=(id,genre)=>{
    setSortedData(data.results.filter(genre=>genre.genre_ids.includes(id)))
    setDropDownGenre(genre)
    setDropDownOrder('정렬기준')
  }

  console.log(data)
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
          <Dropdown>
            <Dropdown.Toggle className='w-100 mb-2' variant="danger" id="dropdown-popular">
              {dropDownOrder}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={orderPopular}>인기 많은순</Dropdown.Item>
              <Dropdown.Item onClick={reversePopular}>인기 적은순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className='w-100 mb-2' variant="danger" id="dropdown-genre">
              {dropDownGenre}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {genreData?.map((item,index)=>(<Dropdown.Item key={index} onClick={()=>genreOn(item.id,item.name)}>{item.name}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {sortedData.length ===0 ?(<div className='text-white text-center'>일치하는 정보가 없습니다</div>): sortedData.map((movie, index) => <Col key={index} lg={4} xs={6} className='d-flex justify-content-center p-1'>
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
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage