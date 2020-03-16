import { FETHC_FILMS_START, FETHC_FILMS_SUCCESS, FETHC_FILMS_ERROR, SWITCH_FILM_OVERVIEW} from "../actions/actionsTypes";

let initialState = {
    films: [],
    loading: true,
    currentPage: 1,
    pageContent: 'topRated',
    error:''
};

// "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
// "id": 19404,
// "adult": false,
// "genre_ids": [35,18,10749],
// "title": "Dilwale Dulhania Le Jayenge",
// "vote_average": 8.8,
// "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
// "release_date": "1995-10-20"

export default function filmsReducer(state = initialState, action){
    switch (action.type){
        case FETHC_FILMS_START:
            return {...state, loading:true}
        case FETHC_FILMS_SUCCESS:
            return {...state, loading:false, films:[...state.films ,...action.films]}
        case FETHC_FILMS_ERROR:
            return {...state, loading:false, error:action.films}
        case SWITCH_FILM_OVERVIEW:
            return {
                ...state,
                films:state.films.map(film=>{
                    if(film.id === action.film_id){
                        return {...film, show_overview:!film.show_overview}
                    }
                    return {...film}
                })
            }
        default:
            return state;
    }
}
