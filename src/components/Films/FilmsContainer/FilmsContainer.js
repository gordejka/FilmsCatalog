import React, { useEffect } from 'react';
import Film from '../FilmCard/FilmCard'
import {connect} from 'react-redux'
import { fetchFilms } from '../../../store/actions/films';


const handleScroll = (event) =>{
    const scrollBottom = event.target.scrollTop;
    console.log(event); 
}

const FilmsContainer = (props) => {
    useEffect(()=>{
        props.fetchFilms()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const films = props.films.map(film=>{
        return(<Film 
            key={film.id}
            title={film.title}
            vote_average={film.vote_average}
            img={film.poster_path}
            />
        )
    })

    

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}
            onScroll={console.log(123)}>
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
        fetchFilms: () => dispatch(fetchFilms())
    }
}

export default connect(mapStateToProps,mapDispathToProps)(FilmsContainer);