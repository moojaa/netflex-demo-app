import React from 'react';
import { useReviewsMoviesQuery } from '../../../../hooks/useReviewsMovies'
import Alert from 'react-bootstrap/Alert';
import ReviewBox from './components/ReviewBox';
import {Spinner} from 'react-bootstrap'

const Reviews = ({ id }) => {

    const { data, isLoading, isError, error } = useReviewsMoviesQuery(id)

    if (isLoading) {
        return <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="border" variant="danger" /></div>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    return (
        <div className='text-white px-5 py-2'>
        <h3>Reviews</h3>
            {data.results.map((item,index)=><ReviewBox data={item} key={index}/>)}
        </div>
    )
}

export default Reviews