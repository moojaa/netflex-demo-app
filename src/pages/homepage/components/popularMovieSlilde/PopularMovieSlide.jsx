import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../movieCard/MovieCard';
import './PopularMovieSlide.style.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return(
    <div className='text-white'>
        <h3>popular Movies</h3>
        <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            containerClass="carousel-container"
            itemClass="movie-slider p-1"
        >
            {data.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
        </Carousel>;
    </div>
    )

}

export default PopularMovieSlide