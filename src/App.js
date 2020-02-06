import React from "react";
import "./App.scss";
//import { Route } from "react-router-dom";
import MoviesContainer from "./components/Movies/MoviesContainer";
import Header from "./components/Header/Header";

const App = props => {
    return (
        <div>
            <Header/>
            <div>nav</div>
            <div className="container">
                <MoviesContainer />
            </div>
        </div>
    );
};

export default App;
