import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Intro from '../Intro/Intro';
import Contents from '../Contents/Contents';
import Menus from '../Menus/Menus';
import MoviesDetail from '../MoviesDetail/MoviesDetail'
export default function Home(props) {
    const { MovieDetail } = useSelector(state => state.inforMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    }, [MovieDetail])
    return (
        <div>
            <Intro/>
            <Contents />
            <Menus />
            <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
        </div>
    )
}
