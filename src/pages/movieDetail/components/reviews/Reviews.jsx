import React, { useState } from 'react'
import { useReviewsMoviesQuery } from '../../../../hooks/useReviewsMovies'
import Alert from 'react-bootstrap/Alert';
import ReviewBox from './components/ReviewBox';

const Reviews = ({ id }) => {

    const { data, isLoading, isError, error } = useReviewsMoviesQuery(id)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    console.log('review', data)
    return (
        <div className='text-white px-5 py-2'>
        <h3>Reviews</h3>
            {data.results.map((item,index)=><ReviewBox data={item} key={index}/>)}
        </div>
    )
}

export default Reviews