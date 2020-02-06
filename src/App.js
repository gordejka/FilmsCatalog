import React from "react";
import "./App.scss";
//import { Route } from "react-router-dom";
import MoviesContainer from "./components/Movies/MoviesContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = props => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="container">
                <MoviesContainer />
            </div>
        </div>
    );
};

export default App;
