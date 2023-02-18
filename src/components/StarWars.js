import React from 'react';
import {starWarsText} from "../utils/constants";

const StarWars = () => {
    return (
        <div className="starWars">
            <div className="contentBox">
                <div className="starWars__text">
                    {starWarsText}
                </div>
            </div>
        </div>
    );
};
export default StarWars;