import React from "react";
import MoviesItems from "./Movies";
import { connect } from "react-redux";
import {
    setMoviesActionCreator,
    setGenresActionCreator,
    setCurrentPageActionCreator,
    openOverViewActionCreator,
    closeOverViewActionCreator
} from "../../redux/movies-reducer";
import * as axios from "axios";
import { getUsers, getGenres } from "../../api/api";
//import {getUsers} from "../../api/api";

class MoviesContainer extends React.Component {
    componentDidMount() {
        getUsers(this.props.currentPage).then(respone => {
            this.props.setMovies(respone.results);
        });
        getGenres().then(respone => {
            this.props.setGenres(respone.genres);
        });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber + 1);
        getUsers(pageNumber + 1).then(respone => {
            this.props.setMovies(respone.results);
        });
    };

    render() {
        return (
            <MoviesItems
                openOverView={this.props.openOverView}
                closeOverView={this.props.closeOverView}
                movies={this.props.movies}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
            />
        );
    }
}

const mapStateProps = state => {
    return {
        movies: state.movies.movies,
        genres: state.movies.genres,
        totalPages: state.movies.totalPages,
        totalMovies: state.movies.totalFilms,
        currentPage: state.movies.currentPage,
        isFetching: state.movies.isFetching
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setMovies: movies => {
            dispatch(setMoviesActionCreator(movies));
        },
        setGenres: genres => {
            dispatch(setGenresActionCreator(genres));
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        openOverView: movieId => {
            dispatch(openOverViewActionCreator(movieId));
        },
        closeOverView: movieId => {
            dispatch(closeOverViewActionCreator(movieId));
        }
    };
};

export default connect(mapStateProps, mapDispatchToProps)(MoviesContainer);
