import React from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navItems} from "./utils/constants";
import Loader from "./components/Loader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: navItems[0],
            isLoading: false,
        }
    }

    changePage = currentPage => {
        this.setState({currentPage, titlePage: currentPage});
    }

    changeLoading = () => {
        this.setState({isLoading: !this.state.isLoading});
    }

    render() {
        return (
            <div className="container-fluid">
                <Header changePage={this.changePage} currentPage={this.state.currentPage}/>
                {this.state.isLoading ? <Loader/> :
                    <Main currentPage={this.state.currentPage} changeLoading={this.changeLoading}/>}
                <Footer currentPage={this.state.currentPage}/>
            </div>
        );
    }


}

export default App;
