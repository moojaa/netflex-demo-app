import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useMovies'
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/movieSilder/MovieSlider';
import { responsive } from '../../../../constants/responsive';


const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return(
    <div>
      <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
    )

}

export default TopRatedMovieSlide