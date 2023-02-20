import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";
import styles from '../css/navigation.module.css'

const Navigation = ({changePage}) => {
    return (
        // <nav className={`fixed-top mt-1 ms-5`}>
            <nav className={`${styles.fixedTop} mt-1 ms-5`}>
            <ul className={styles.menu}>
                {navItems.map(item => <NavItem key={item} itemTitle={item} changePage={changePage}
                />)}
            </ul>
        </nav>
    );
};

export default Navigation;