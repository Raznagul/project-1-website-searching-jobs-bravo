import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

import { Link } from "react-router-dom";

import axios from 'axios';

const uniq = a => [...new Set(a)];

const findJobContent = (a, id) => {
    if (typeof a !== 'undefined' && a.length > 0) {
        return a.find(item => item.id === id);
    }
};

class JobSearchFilter extends Component {

    constructor(props) {
        super(props);

    }

    show = () => {
        alert('Hello World!');
    }

    render() {

        return (
            <div>
                <label>Full time only</label><input type="checkbox" name="full_time" value="true" />
                <input name="date" type="date" />
                <select name="Company">
                    {this.props.location.map(location =>
                        <option value={location}>{location}</option>)
                    }
                </select>
                <button type="button" onClick={this.show}>Click Me!</button>
            </div>
        );
    }
}

class JobSearchContent extends Component {

    constructor(props) {
        super(props);
    }

    show = () => {
        alert("saving");
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img style={{ maxHeight: 250, maxWidth: 250 }} src={this.props.jobContent && this.props.jobContent.company_logo} className="icon" alt="Instagram" />
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <p>Company name: {this.props.jobContent && this.props.jobContent.company}</p>
                                <p>Direccion: {this.props.jobContent && this.props.jobContent.location} </p>
                                <p>Company url: <a href={this.props.jobContent && this.props.jobContent.company_url}>{this.props.jobContent && this.props.jobContent.company_url}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p>Job tittle: {this.props.jobContent && this.props.jobContent.title} </p>
                    <p>Date posted: {this.props.jobContent && this.props.jobContent.created_at} </p>
                    <button onClick={this.show} type="button">save</button>
                </div>
                <hr />
                <div>
                    <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.description }} ></p>
                    <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.how_to_apply }}></p>
                </div>
            </div>
        );
    }
}

class JobSearchList extends Component {

    constructor(props) {
        super(props);
    }

    changeContent = (id) => {
        this.props.handletCurrentContent(id);
    }

    render() {

        return (
            <div>
                {this.props.jobList.map(item =>
                    <div>
                        <p><a onClick={ () => this.changeContent(item.id)}>{item.title}</a></p>
                        <p>{item.location}</p>
                        <p>{item.created_at}</p>
                        <hr />
                    </div>

                )}
            </div>
        );
    }
}

const baseURL = "https://jobs.github.com/positions.json?";

class JobSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], currentJob: [] };
    }

    componentDidMount() {
        let searchURL = baseURL + this.props.search;

        axios.get(searchURL)
            .then(result => {
                this.setState({ items: result.data });
                this.setState({ currentJob: findJobContent(this.state.items, "40af75b0-43da-11e8-8421-06fdf93a68d5") });
                //this.state.items.map(e => console.log(e));
            })
            .catch(error => {
                console.log(error);
            });
    }

    setCurrentJob = (jobId) => {
        this.setState({ currentJob: findJobContent(this.state.items, jobId) });
    }

    render() {
        console.log(this.state.currentJob);
        let component = this;
        return (

            <div className="container ">

                <div className="row">
                    <div className="col-sm ">
                        <LocationSearchInput />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm ">
                        <JobSearchFilter location={uniq(this.state.items.map(item => item.location))} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <JobSearchList handletCurrentContent={component.setCurrentJob} jobList={this.state.items.map(({ id, title, location, created_at }) => ({ ["id"]: id, ["title"]: title, ["location"]: location, ["created_at"]: created_at }))} />
                    </div>
                    <div className="col-sm-9">
                        <JobSearchContent jobContent={this.state.currentJob} />
                    </div>
                </div>
            </div>
        );
    }
}

export default JobSearchPage;

export { JobSearchFilter, JobSearchList, JobSearchContent };