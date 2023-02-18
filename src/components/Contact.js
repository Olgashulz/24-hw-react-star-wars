import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import Button from "./Button";
import Loader from "./Loader";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(`${base_url}/v1/planets`);
            const data = await response.json();
            const planetNames = data.map(d => d.name);
            this.setState({planets: planetNames, isLoading: false},
            );

        } catch (error) {
            console.error('Error fetching data:', error);
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
                        <select id="country" name="country">
                            {this.state.planets.map((planet, index) => (
                                <option key={index} value={planet}>{planet}</option>
                            ))}
                        </select>
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