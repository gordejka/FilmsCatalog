import { FETHC_FILMS_START, FETHC_FILMS_SUCCESS, FETHC_FILMS_ERROR } from "../actions/actionsTypes";

let initialState = {
    films: [],
    loading: true,
    currentPage: 1,
    pageContent: 'topRated',
    error:''
};

export default function filmsReducer(state = initialState, action){
    switch (action.type){
        case FETHC_FILMS_START:
            return {...state, loading:true}
        case FETHC_FILMS_SUCCESS:
            return {...state, loading:false, films:[...state.films ,...action.films]}
        case FETHC_FILMS_ERROR:
            return {...state, loading:false, error:action.films}
        default:
            return state;
    }
}