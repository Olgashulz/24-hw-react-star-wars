import React from 'react';

const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)}>
            <a href="#">{itemTitle}</a></li>
    );
};

export default NavItem;