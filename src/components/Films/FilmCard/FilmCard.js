import React from 'react';
import calsses from './FilmCard.module.css'
import classes from './FilmCard.module.css';


const FilmCard = (props) => {
    const imgUrl='https://image.tmdb.org/t/p/w300/'
    return (
        <div className={calsses.card}>
            <div className={calsses.card__header}>
                <img 
                    className={classes.card__img} 
                    src={imgUrl+props.img}
                    alt="title"/> 
                <div className={calsses.card__rating}>
                    {props.vote_average}
                </div>
            </div>
            <div className={classes.card__footer}>
                <div className={calsses.card__name}>
                    {props.title}
                </div>
                <div className={classes.card__genres}>
                    action, comedy, dramma
                </div>
            </div>
        </div>
    );
};

export default FilmCard;