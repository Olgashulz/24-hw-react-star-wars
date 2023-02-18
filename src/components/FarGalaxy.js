import React, {Component} from 'react';
import {base_url} from "../utils/constants";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        const film = Math.floor(Math.random() * 6) + 1;
        try {
            const response = await fetch(`${base_url}/v1/films/${film}`);
            const data = await response.json();
            this.setState({text: data.opening_crawl})
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        //this.props.changeLoading();
    }

    render() {
        return (
            <p className="farGalaxy">{this.state.text}</p>
        );
    }
}

export default FarGalaxy;