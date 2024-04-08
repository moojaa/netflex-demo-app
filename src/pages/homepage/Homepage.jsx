import React from 'react'
import Banner from './components/banner/Banner'
import PopularMovieSlide from './components/popularMovieSlilde/PopularMovieSlide'
import TopRatedMovieSlide from './components/topRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/upcomingMovieSlide/UpcomingMovieSlide'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <TopRatedMovieSlide/>
      <UpcomingMovieSlide/>
    </div>
  )
}

export default Homepage