import * as axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "6b7f89fff04474b0c2a52349649dd1f4";

export const moviesAPI = {
    getTopRated(currentPage = 1){
        return axios
            .get(
                `${baseURL}movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
            )
            .then(response => {
                return response.data;
            });
    },
    getGenres(){
        return axios
            .get(
                `${baseURL}genre/movie/list?api_key=${apiKey}&language=en-US`
            )
            .then(response => {
                return response.data;
            });
    }
}

