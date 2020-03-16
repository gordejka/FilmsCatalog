import React from 'react';
import classes from './FilmCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faInfo, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const FilmCard = (props) => {
    const imgUrl='https://image.tmdb.org/t/p/w300/'
    const cls = {
        card_info:[
            classes.card__info,
            props.show_overview?
            classes.card__header_visible:
            classes.card__header_hidden
        ]
    };
    return (
        <div className={classes.card}>
            <div className={classes.card__header}>
                <img 
                    className={classes.card__img} 
                    src={imgUrl+props.img}
                    alt="title"/> 
                <div className={classes.card__rating}>
                    {props.vote_average}
                </div>
                <div className={classes.card__actions}>
                    <button className={classes.button_info}>
                        <FontAwesomeIcon icon={faPlayCircle}/>
                    </button> 
                    <button className={classes.button_info} onClick={()=>props.switchFilmOverview(props.id)}>
                        <FontAwesomeIcon icon={faInfo}/>
                    </button> 
                </div>
                <div className={cls.card_info.join(' ')}>
                    <button className={classes.button_close} onClick={()=>props.switchFilmOverview(props.id)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>  
                    <p>
                        {props.overview}
                    </p>
                </div>
            </div>
            <div className={classes.card__footer}>
                <div className={classes.card__name}>
                    {props.title}
                </div>
                <div className={classes.card__genres}>
                    {props.genres.join(', ')}
                </div>
            </div>
        </div>
    );
};

export default FilmCard;