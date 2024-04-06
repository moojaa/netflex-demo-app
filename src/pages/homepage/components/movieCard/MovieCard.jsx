import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ({ movie }) => {
    return (
        <div
            style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")" }}
            className='movie-card'
        >
            <div className='overlay'>
                <div>
                <h3>{movie.title}</h3>
                {movie.genre_ids.map((id) => (
                    <Badge bg="danger me-1">{id}</Badge>
                ))}
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='movie-card-font'><FontAwesomeIcon icon={faImdb} className='me-1' />{movie.vote_average}</div>
                    <div className='movie-card-font'><FontAwesomeIcon icon={faUsers} className='me-1' />{Math.floor(movie.popularity)}</div>
                    <div className='movie-card-font'>{movie.adult ? <div className='bg-danger rounded-circle adult-style'>18</div> : <div className='bg-warning rounded-circle text-black adult-style'>all</div>}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard