import { moviesAPI } from "../api/api";

const SET_MOVIES = "SET-MOVIES";
const SET_GENRE = "SET-GENRE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const OPEN_OVERVIEW = "OPEN-OVERVIEW";
const CLOSE_OVERVIEW = "CLOSE_OVERVIEW";

let initionalState = {
    movies: [],
    genres: [],
    totalPages: 10,
    totalFilms: 0,
    currentPage: 1,
    pageContent: 'topRated'
    //isFetching: false
};

const moviesReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: [...state.movies, ...action.movies] };
        case SET_GENRE:
            return { ...state, genres: [...state.genres, ...action.genres] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case OPEN_OVERVIEW:
            return {
                ...state,
                movies: state.movies.map(m => {
                    if (m.id === action.movieId) {
                        return { ...m, openOverView: true };
                    }
                    return m;
                })
            };
        case CLOSE_OVERVIEW:
            return {
                ...state,
                movies: state.movies.map(m => {
                    if (m.id === action.movieId) {
                        return { ...m, openOverView: false };
                    }
                    return m;
                })
            };
        default:
            return state;
    }
};

//actionCreators
export const setMoviesActionCreator = movies => ({ type: SET_MOVIES, movies });
export const setGenresActionCreator = genres => ({ type: SET_GENRE, genres });
export const openOverViewActionCreator = movieId => ({type: OPEN_OVERVIEW,movieId});
export const closeOverViewActionCreator = movieId => ({type: CLOSE_OVERVIEW,movieId});
export const setCurrentPageActionCreator = currentPage => ({type: SET_CURRENT_PAGE,currentPage});


//thunkCreators
export const getMoviesThunkCreator = currentPage => {
    return dispath => {
        moviesAPI.getTopRated(currentPage).then(respone => {
            dispath(setMoviesActionCreator(respone.results));
        });
    };
};
export const getGenresThunkCreator = () => {
    return dispath => {
        moviesAPI.getGenres().then(respone => {
             dispath(setGenresActionCreator(respone.genres));
        });
    };
};

export default moviesReducer;
