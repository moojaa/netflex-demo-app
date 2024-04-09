import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchReviewsMovie = (id)=>{
    return api.get(`/movie/${id}/reviews`)
}

export const useReviewsMoviesQuery=(id)=>{
    return useQuery({
        queryKey:['movie-review',id],
        queryFn:()=>fetchReviewsMovie(id),
        select:(result)=>result.data,
    })
}