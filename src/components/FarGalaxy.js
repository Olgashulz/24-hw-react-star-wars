import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import styles from '../css/farGalaxy.module.css'

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_crawl: '',
        };
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({ opening_crawl });
        } else {
            const film = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${film}`)
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                    this.setState({ opening_crawl: data.opening_crawl }
                        // ,() => {this.props.changeLoading();}
                    );
                });
        }
    }

    render() {
        return <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>;
    }
}

export default FarGalaxy;