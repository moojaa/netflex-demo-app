import React from 'react'
import { useRecommendMoviesQuery } from '../../../../hooks/useRecommendMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/movieSilder/MovieSlider';
import { responsive } from '../../../../constants/responsive';
const RecommendSlider = ({ id }) => {

    const { data, isLoading, isError, error } = useRecommendMoviesQuery(id)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider title='Related Movie' movies={data.results} responsive={responsive} />
        </div>
    )
}

export default RecommendSlider