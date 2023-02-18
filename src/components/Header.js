import React from 'react';
import Navigation from "./Navigation";

const Header = ({changePage, currentPage}) => {
    return (
        <header>
            <Navigation changePage={changePage}/>
            <h1 className="text-center py-4 title">{currentPage === "Home" ? "Luke Skywalker" : currentPage}</h1>
        </header>
    );
};

export default Header;