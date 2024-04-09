import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useMovies'
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/movieSilder/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import {Spinner} from 'react-bootstrap'

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery()


    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="danger" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return(
    <div>
      <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
    )
}

export default UpcomingMovieSlide