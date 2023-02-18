import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import Loader from "./Loader";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => this.setState({
                    character: {
                        name: data.name,
                        birthYear: data.birth_year,
                        eyeColor: data.eye_color,
                        hairColor: data.hair_color,
                        gender: data.gender,
                        imgUrl: `${base_url}/${data.image}`
                    },
                    isLoading: false
                }
            ))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader/>
            )
        } else {
            return (
                <div className='meinContainer aboutMe'>
                    <h2 className="aboutMe-title">{this.state.character.name}</h2>
                    <div className="cardContainer">
                        <div className="cardPhoto">
                            <img src={this.state.character.imgUrl} alt='sw hero'/>
                        </div>
                        <div className="cardInfo">
                            <p className="cardText">Birth year:
                                <span>{this.state.character.birthYear}</span>
                            </p>
                            <p className="cardText">Eye color:
                                <span>{this.state.character.eyeColor}</span>
                            </p>
                            <p className="cardText">Hair color:
                                <span>{this.state.character.hairColor}</span>
                            </p>
                            <p className="cardText">Gender:
                                <span>{this.state.character.gender}</span>
                            </p>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default AboutMe;