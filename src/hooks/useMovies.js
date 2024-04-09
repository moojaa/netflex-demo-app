import {useQuery} from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovies=(item)=>{
    return api.get(`/movie/${item}`)
}

export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:()=>fetchMovies('popular'),
        select:(result)=>result.data,
    })
}

export const useTopRatedMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-topRated'],
        queryFn:()=>fetchMovies('top_rated'),
        select:(result)=>result.data,
    })
}

export const useUpcomingMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:()=>fetchMovies('upcoming'),
        select:(result)=>result.data,
    })
}

export const useDetailMoviesQuery=(id)=>{
    return useQuery({
        queryKey:['movie-details',id],
        queryFn:()=>fetchMovies(id),
        select:(result)=>result.data,
    })
}