import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchVideoMovie = (id)=>{
    return api.get(`/movie/${id}/videos`)
}

export const useVideoMoviesQuery=(id)=>{
    return useQuery({
        queryKey:['movie-video',id],
        queryFn:()=>fetchVideoMovie(id),
        select:(result)=>result.data.results,
    })
}