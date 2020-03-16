import { FETHC_FILMS_SUCCESS, FETHC_FILMS_START,FETHC_FILMS_ERROR, SWITCH_FILM_OVERVIEW } from "./actionsTypes"
import { moviesAPI } from "../../api/api"

export function fetchFilmsStart(){
    return {type:FETHC_FILMS_START}
}
export function fetchFilmsSuccess(films){
    return {type:FETHC_FILMS_SUCCESS, films}
}
export function fetchFilmsError(error){
    return {type:FETHC_FILMS_ERROR, error}
}

export function fetchFilms(){
    return async (dispath) => {
        dispath(fetchFilmsStart())
        try{

            let genres_response = await moviesAPI.getGenres()
            let genres_map = new Map(); 
            for(let i = 0; i < genres_response.genres.length;i++){
                genres_map.set(genres_response.genres[i].id, genres_response.genres[i].name)
            }

            let films_respone = await moviesAPI.getTopRated()

            let results = films_respone.results.map((film)=>{
                return {
                    id:film.id,
                    title:film.title,
                    poster_path:film.poster_path,
                    adult:film.adult,
                    genres:film.genre_ids.map((genre_id)=>{
                        return genres_map.get(genre_id)
                    }),
                    vote_average:film.vote_average,
                    overview:film.overview,
                    release_date:film.release_date,
                    show_overview:false
                }
            })
            dispath(fetchFilmsSuccess(results))
            
            

        }catch(error){
            dispath(fetchFilmsError(error.name))
        }
    }
}

export function switchFilmOverview(film_id){
    return {type:SWITCH_FILM_OVERVIEW, film_id}
}