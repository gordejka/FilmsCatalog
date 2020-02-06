import React from "react";

import * as axios from "axios";

import Films from "./Films";

class FilmsApiComponetnt extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=6b7f89fff04474b0c2a52349649dd1f4&language=en-US&page=${this.props.currentPage}`
            )
            .then(respone => {
                this.props.setFilms(respone.data.results);
            });
        axios
            .get(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=6b7f89fff04474b0c2a52349649dd1f4&language=en-US"
            )
            .then(respone => {
                this.props.setGenres(respone.data.genres);
            });
    }

    setGenre(genres) {
        let result = "";
        for (let i = 0; i < genres.length; i++) {
            for (let key in this.props.genres) {
                if (this.props.genres[key].id === genres[i]) {
                    result += this.props.genres[key].name + " ";
                }
            }
        }
        return result;
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber + 1);
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=6b7f89fff04474b0c2a52349649dd1f4&language=en-US&page=${pageNumber + 1}`
            )
            .then(respone => {
                this.props.setFilms(respone.data.results);
            });
    }

    render() {
        return (
            <Films
                films={this.props.films}
                openOverView={this.props.openOverView}
                closeOverView={this.props.closeOverView}
                setGenre={this.setGenre}
                onPageChanged={this.onPageChanged}
                genres={this.props.genres}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                
            />
        );
    }
}

export default FilmsApiComponetnt;