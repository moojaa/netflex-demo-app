import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import MovieCard from '../movieCard/MovieCard';
import 'react-multi-carousel/lib/styles.css';


const MovieSlider = ({title,movies,responsive}) => {
    return (
        <div className='text-white px-5 py-2'>
            <h3>{title}</h3>
            <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                itemClass="movie-slider p-1"
            >
                {movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </Carousel>
        </div>
    )
}

export default MovieSlider