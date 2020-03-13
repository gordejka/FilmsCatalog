import { FETHC_FILMS_SUCCESS, FETHC_FILMS_START,FETHC_FILMS_ERROR } from "./actionsTypes"
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
            let respone = await moviesAPI.getTopRated()
            dispath(fetchFilmsSuccess(respone.results))        
        }catch(error){
            dispath(fetchFilmsError(error.name))
        }
    }
}