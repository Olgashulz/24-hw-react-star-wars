import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import Loader from "./Loader";
import {checkExpirationDate} from "../utils/sevice";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const hero = JSON.parse(localStorage.getItem("hero"));
        const dateOfSaveHero = localStorage.getItem("dateOfSaveHero");

        if (hero && checkExpirationDate(dateOfSaveHero)) {
            this.setState({
                hero,
                isLoading: false
            })
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                            hero: {
                                name: data.name,
                                birthYear: data.birth_year,
                                eyeColor: data.eye_color,
                                hairColor: data.hair_color,
                                gender: data.gender,
                                imgUrl: `${base_url}/${data.image}`
                            },
                            isLoading: false
                        }, () => {
                            localStorage.setItem('hero', JSON.stringify(this.state.hero))
                            localStorage.setItem('dateOfSaveHero', new Date().toString())
                        }
                    )
                })
        }
    }


    render() {
        if (this.state.isLoading) {
            return (
                <Loader/>
            )
        } else {
            return (
                <div className='meinContainer aboutMe'>
                    <h2 className="aboutMe-title">{this.state.hero.name}</h2>
                    <div className="cardContainer">
                        <div className="cardPhoto">
                            <img src={this.state.hero.imgUrl} alt='sw hero'/>
                        </div>
                        <div className="cardInfo">
                            <p className="cardText">Birth year:
                                <span>{this.state.hero.birthYear}</span>
                            </p>
                            <p className="cardText">Eye color:
                                <span>{this.state.hero.eyeColor}</span>
                            </p>
                            <p className="cardText">Hair color:
                                <span>{this.state.hero.hairColor}</span>
                            </p>
                            <p className="cardText">Gender:
                                <span>{this.state.hero.gender}</span>
                            </p>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default AboutMe;