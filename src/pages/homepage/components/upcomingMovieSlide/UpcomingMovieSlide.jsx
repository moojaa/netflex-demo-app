import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useMovies'
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/movieSilder/MovieSlider';
import { responsive } from '../../../../constants/responsive';


const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery()


    if (isLoading) {
        return <h1>Loading...</h1>
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