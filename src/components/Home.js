import React, {Component} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Loader from "./Loader";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    changeLoading = () => {
        this.setState({ isLoading: !this.state.isLoading });
    };

    render() {
        if (this.state.isLoading) {
            return <Loader />;
        } else {
            return (
                <main className='clearfix'>
                    <Hero />
                    <DreamTeam />
                    <FarGalaxy changeLoading={this.changeLoading} />
                </main>
            );
        }
    }
}

export default Home;