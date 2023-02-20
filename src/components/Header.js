import React from 'react';
import Navigation from "./Navigation";
import styles from '../css/header.module.css'

const Header = ({changePage, currentPage}) => {
    return (
        <header>
            <Navigation changePage={changePage}/>
            <h1 className={`text-center py-4 ${styles.title}`}>{currentPage === "Home" ? "Luke Skywalker" : currentPage}</h1>
        </header>
    );
};

export default Header;