import React from "react";
import "./App.scss";
import FilmsContainer from "./components/Films/FilmsContainer/FilmsContainer";

const App = props => {
    return (
        <div>
            <div className="container">
                <FilmsContainer/>
            </div>
        </div>
    );
};

export default App;
