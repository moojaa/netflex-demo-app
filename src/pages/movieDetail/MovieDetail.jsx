import React, { useState } from 'react'
import { useDetailMoviesQuery } from '../../hooks/useMovies'
import { useVideoMoviesQuery } from '../../hooks/useVideoMovies';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faPlay } from '@fortawesome/free-solid-svg-icons';
import RecommendSlider from './components/recommendSlider/RecommendSlider';
import Reviews from './components/reviews/Reviews';
import { Spinner } from 'react-bootstrap'
import YouTube from 'react-youtube';
import './MovieDetail.style.css'


const MovieDetail = () => {

  let { id } = useParams()
  const [showPaly, setShowPlay] = useState(false)

  const handleClose = () => setShowPlay(false);
  const handleShow = () => setShowPlay(true);

  const { data, isLoading, isError, error } = useDetailMoviesQuery(id)

  const { data: videoKey } = useVideoMoviesQuery(id)

  if (isLoading) {
    return <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="danger" /></div>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <div>
      <div style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.poster_path}` + ")"
      }}
        className='detail-bg'
      >
        <div className='text-white d-flex flex-column justify-content-center align-items-start h-100 bg-text-area'>
          <h2>{data?.title}</h2>
          <p>{data?.overview}</p>
          <Button onClick={handleShow} variant="light" className='px-5 py-2'><FontAwesomeIcon className='me-2' icon={faPlay} />재생</Button>
        </div>
      </div>
      <Container>
        <Row className='pb-5'>
          <Col lg={4}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`} alt="poster" className='w-100' />
          </Col>
          <Col lg={8}>
            <div className='text-white'>
              {data?.genres.map((genre, index) => (
                <Badge key={index} bg='danger me-1'>{genre.name}</Badge>
              )
              )}
              <h1 className='py-2'>{data?.title}</h1>
              <h3>{data?.tagline}</h3>
              <div className='d-flex align-items-center'>
                <h3 className='me-4'><FontAwesomeIcon icon={faImdb} className='me-2' />{data?.vote_average}</h3>
                <h3 className='me-4'><FontAwesomeIcon icon={faUsers} className='me-2 text-warning' />{data?.popularity}</h3>
                <div className='p-0 m-0'>{data.adult ? <div className='bg-danger rounded-circle adult-style'>18</div> : <div className='bg-warning rounded-circle text-black adult-style'>ALL</div>}</div>
              </div>
              <div className='border-top border-bottom'>
                <h4 className='py-2'>
                  {data.overview}
                </h4>
              </div>
              <div className='py-3'>
                <div className='d-flex align-items-center mb-2'>
                  <div className='bg-danger py-2 rounded-pill box-style me-3'>Budget</div>
                  <div>{`$ ${data?.budget.toLocaleString()}`}</div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <div className='bg-danger py-2 rounded-pill box-style me-3'>Revenue</div>
                  <div>{`$ ${data?.revenue.toLocaleString()}`}</div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <div className='bg-danger py-2 rounded-pill box-style me-3'>Release Date</div>
                  <div>{`${data?.release_date}`}</div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='bg-danger py-2 rounded-pill box-style me-3'>Run time</div>
                  <div>{`${data?.runtime}분`}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <RecommendSlider id={id} />
      <Reviews id={id} />
      <Modal
        size="lg"
        show={showPaly}
        onHide={handleClose}
        keyboard={false}
        centered
        data-bs-theme="dark"
      >
        <Modal.Header className='bg-black' closeButton>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center bg-black'>
          {videoKey?.length > 0 && <YouTube videoId={videoKey[0].key} />}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieDetail