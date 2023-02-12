import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowAltCircleUp } from 'react-icons/fa'
import MoviesRow from './MoviesRow';
import * as ACTIONS from '../store/action';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../hooks';

const GoScrollToTop = () => {
    scroll.scrollToTop();
}

export default function Contents(props) {
    const dispatch = useDispatch();
    const scrollY = useScrollY();
    const { NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries,
    } = useSelector(state => state.inforMovies)
    useEffect(() => {
        dispatch(ACTIONS.getNetflixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentaries());
    }, [dispatch])
    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflex Originals" isNetflix={true} idSection='netflix'/>
            <MoviesRow movies={TrendingMovies} title="Trending Movies" idSection='trending'/>
            <MoviesRow movies={TopRatedMovies} title="Top Rates Movies" idSection='topRated'/>
            <MoviesRow movies={ActionMovies} title="Action Movies" idSection='actionMovies'/>
            <MoviesRow movies={ComedyMovies} title="Comedy Movies" idSection='comedyMovies'/>
            <MoviesRow movies={HorrorMovies} title="Horror Movies" idSection='horrorMovies'/>
            <MoviesRow movies={RomanceMovies} title="Romance Movies" idSection='romanceMovies'/>
            <MoviesRow movies={Documentaries} title="Documantaries" idSection='documentaries'/>
            <GoToTop 
                onClick={() => GoScrollToTop()}
                style = {{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}    
            >
                <FaArrowAltCircleUp/>
            </GoToTop>
        </div>
    )
}

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s linear;

    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    @media screen and (max-width: 600px) {
        right: 40px;
    }
`
