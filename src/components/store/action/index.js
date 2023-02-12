import axios from "axios";
import * as Types from "../types";
const API_KEY = 'e3779601a69ed7a5699626ededdc893e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results});
    } catch (error) {
        console.log('error netflix', error);
    }
}

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
        );
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error trending', error);
    }
}

export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error top rated', error);
    }
}

export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type: Types.GET_ACTION_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error action', error);
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error comedy', error);
    }
}

export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type: Types.GET_HORROR_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error horror', error);
    }
}

export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type: Types.GET_ROMANCE_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error romance', error);
    }
}

export const getDocumentaries = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('error documentaries', error);
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
} 

export const getSearchMovies = (keyword) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('error search movie')
    }
}