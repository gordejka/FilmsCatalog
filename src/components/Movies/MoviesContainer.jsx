import React from "react";
import MoviesItems from "./Movies";
import { connect } from "react-redux";
import {
    setMoviesActionCreator,
    setGenresActionCreator,
    setCurrentPageActionCreator,
    openOverViewActionCreator,
    closeOverViewActionCreator,
    getMoviesThunkCreator,
    getGenresThunkCreator
} from "../../redux/movies-reducer";

class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.getMovies(this.props.currentPage);
        this.props.getGenres();
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber + 1);
        this.props.getMovies(pageNumber + 1);
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
        },
        getMovies: currentPage => {
            dispatch(getMoviesThunkCreator(currentPage));
        },
        getGenres: () => {
            dispatch(getGenresThunkCreator());
        }
    };
};

export default connect(mapStateProps, mapDispatchToProps)(MoviesContainer);
