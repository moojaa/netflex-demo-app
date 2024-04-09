import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/useMovies'
import Alert from 'react-bootstrap/Alert';
import {Spinner} from 'react-bootstrap'
import "./Banner.style.css"

const Banner = () => {
    const {data,isLoading,isError,error} = usePopularMoviesQuery()
    if(isLoading){
        return<div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="danger" /></div>
    }
    if(isError){
        return<Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div style={{
      backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.results[0].poster_path}`+")"
    }}
    className='banner'
    >
      <div className='text-white banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner