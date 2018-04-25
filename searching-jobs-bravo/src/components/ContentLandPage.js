import React, { Component } from 'react';
import Search from './Search';
import * as routes from "../constants/routes";
import { Link, withRouter } from "react-router-dom";
import './../styles/css/style.css';


class ContentLandPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            lat: '',
            long: ''
        }
    }

    onSubmit = event => {
        event.preventDefault();
        console.log('---> ' + this.state.lat);
        console.log('---> ' + this.state.long);
        console.log('---> ' + this.state.keyword);
        //Reddirigir a componente de David (Core)
        console.log('---> ' + this.props.history);

        if (this.state.lat && this.state.long && this.state.keyword) {
            this.props.history.push(routes.jobsearch + "/description=" + this.state.keyword + "&lat=" + this.state.lat + "&long=" + this.state.long);
        } else if (this.state.lat && this.state.long) {
            this.props.history.push(routes.jobsearch + "/lat=" + this.state.lat + "&long=" + this.state.long);
        } else if (this.state.keyword) {
            this.props.history.push(routes.jobsearch + "/description=" + this.state.keyword);
        } else {
            this.props.history.push(routes.jobsearch);

        }
    }

    handleChange = (event) => {
        this.changeStateValue(event.target.name, event.target.value);
        console.log('---> ' + this.state.keyword);
    }

    setLatLong = (lat, long) => {
        this.changeStateValue('lat', lat);
        this.changeStateValue('long', long);
    }

    changeStateValue = (key, value) => {
        let change = {};
        change[key] = value;
        this.setState(change);
    }

    render() {
        return (
            <div className="landPageContent">
                <div className="jumbotron">
                    <form className="formSearch" id="formSearch" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-12 text-center mb-2">
                                <h1 className="jumbotron-heading">Let experts do the searching</h1>
                            </div>
                        </div>
                        <Search setLatLong={this.setLatLong} handleChange={this.handleChange} onSubmit={this.onSubmit} />
                        <div className="row">
                            <div className="col-12 text-center mt-2">
                                <Link to={routes.jobsearch}>View all jobs >></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

export default withRouter(ContentLandPage);