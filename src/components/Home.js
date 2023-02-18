import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

const Home = ({changeLoading}) => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy changeLoading={changeLoading}/>
        </main>
    );
};

export default Home;