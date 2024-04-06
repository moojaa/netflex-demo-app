import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'

const Banner = () => {
    const {data,isLoading,error} = usePopularMoviesQuery()
    console.log('ddd',data)
    if(isLoading){
        <h1>loading</h1>
    }
    if(error){
        
    }
  return (
    <div>Banner</div>
  )
}

export default Banner