import React from "react";
import styles from "./TopRated.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MoviesItems = props => {
    return (
        <div className={styles.filmsWrapper}>
            {props.movies.map(f => (
                <div key={f.id} className={styles.item}>
                    <div className={styles.additionalInfoWrapper}>
                        <div className={styles.img_container} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${f.poster_path})`}}></div>
                        <div className={styles.additionalInfoHidden}>
                            <div className={styles.buttonContainer}>
                                {/* <div>
                                    Watch now
                                </div> */}

                                <button
                                    onClick={() => props.openOverView(f.id)}
                                    className={styles.viewInfo}
                                >
                                    View Info
                                </button>
                            </div>
                        </div>
                        {f.openOverView && (
                            <div className={styles.overViewContainer}>
                                <div>
                                    <FontAwesomeIcon
                                        className={styles.iconClose}
                                        onClick={() =>
                                            props.closeOverView(f.id)
                                        }
                                        icon={faTimes}
                                    />
                                </div>
                                {f.overview}
                            </div>
                        )}
                    </div>
                    <div className={styles.mainInfoWrapper}>
                        <div className={styles.title}>{f.title}</div>
                        <div className={styles.voteAverage}>
                            {f.vote_average}
                        </div>
                        <div className={styles.genres}>
                            {f.genre_ids}
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.loadMoreWrapper}>
                <button
                    onClick={() => {props.onPageChanged(props.currentPage)}}
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default MoviesItems;
