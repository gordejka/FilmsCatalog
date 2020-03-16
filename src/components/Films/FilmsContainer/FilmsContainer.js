import React, { useEffect } from 'react';
import Film from '../FilmCard/FilmCard'
import {connect} from 'react-redux'
import { fetchFilms, switchFilmOverview } from '../../../store/actions/films';

const FilmsContainer = (props) => {
    useEffect(()=>{
        props.fetchFilms()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const films = props.films.map(film=>{
        return(<Film 
            key={film.id}
            id={film.id}
            title={film.title}
            vote_average={film.vote_average}
            img={film.poster_path}
            show_overview={film.show_overview}
            switchFilmOverview={props.switchFilmOverview}
            overview={film.overview}
            genres={film.genres}
            />
        )
    })

    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {films}
            {props.loading ? "loading...":""}
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        loading:state.films.loading,
        films:state.films.films
    }
}

const mapDispathToProps = (dispatch) => {
    return{
        fetchFilms: () => dispatch(fetchFilms()),
        switchFilmOverview: (film_id) => dispatch(switchFilmOverview(film_id))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(FilmsContainer);