import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import Button from "./Button";
import Loader from "./Loader";
import Select from "./Select";
import {checkExpirationDate} from "../utils/sevice"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            planets: ['wait...'],
        }
    }

    componentDidMount() {
        const planets = JSON.parse(localStorage.getItem("planets"));
        const dateOfSavePlanets = localStorage.getItem("dateOfSavePlanets");

        if (planets && checkExpirationDate(dateOfSavePlanets)) {
            this.setState({
                planets,
                isLoading: false
            })
        } else {
            fetch(`${base_url}/v1/planets`)
                .then(response => response.json())
                .then(data => data.map(d => d.name))
                .then(p => {
                    localStorage.setItem('planets', JSON.stringify(p));
                    localStorage.setItem('dateOfSavePlanets', new Date().toString())
                    this.setState({
                            planets: p,
                            isLoading: false,
                        },
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
                <div className="form-container">
                    <form className="">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label htmlFor="country">Country</label>
                        <Select planets={this.state.planets}/>
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."
                                  style={{height: "200px"}}></textarea>
                        <Button/>
                    </form>
                </div>
            );
        }
    }
}

export default Contact;