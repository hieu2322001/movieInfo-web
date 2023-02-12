import React from 'react'
import { useSelector } from 'react-redux'
import MoviesDetail from '../MoviesDetail/MoviesDetail'
import SearchMovies from '../SearchMovies/SearchMovies'

export default function Search() {
  const { MovieDetail } = useSelector(state => state.inforMovies)
  return (
    <div>
        <SearchMovies />
        <MoviesDetail showModal={MovieDetail ? true : false} movie={MovieDetail}/>
    </div>
  )
}
