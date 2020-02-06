import * as axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "6b7f89fff04474b0c2a52349649dd1f4";

export const getUsers = (currentPage = 1) => {
    return axios
        .get(
            `${baseURL}movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
        )
        .then(response => {
            return response.data;
        });
};

export const getGenres = () => {
    return axios
        .get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=6b7f89fff04474b0c2a52349649dd1f4&language=en-US`
        )
        .then(response => {
            return response.data;
        });
};
