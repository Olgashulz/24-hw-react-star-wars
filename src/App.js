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
            isLoading: true,
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
                <Main currentPage={this.state.currentPage} changeLoading={this.changeLoading} isLoading={this.state.isLoading}/>
                <Footer currentPage={this.state.currentPage}/>
            </div>
        );
    }


}

export default App;
