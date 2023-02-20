import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {navItems} from "../utils/constants";
import Loader from "./Loader";

const Main = ({currentPage}) => {
    switch (currentPage) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return (
                // <>
                //     {isLoading ? <Loader/> : <Home changeLoading={changeLoading}/>}
                // </>
                <Home/>
            )
    }
};

export default Main;