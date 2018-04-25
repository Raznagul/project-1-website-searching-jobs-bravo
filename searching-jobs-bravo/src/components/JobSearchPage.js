import React, { Component } from 'react';
import Search from './Search';
import './../styles/css/style.css';
import { db, firebase } from "../firebase";
import * as routes from '../constants/routes';

import { Link, withRouter } from "react-router-dom";

import JobSearchContent from './JobSearchContent';

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

    changeFullTime = (event) => {
        this.props.handleFullTimeState(!event.target.checked);
    }

    render() {

        return (
            <div className="row pb-3">
                <div className="col-sm-1 col-md-2 col-lg-2 pl-5 pt-1 pb-1">
                    <input className="form-check-input" defaultChecked={false} onChange={this.changeFullTime} type="checkbox" name="full_time" id="full_time" />
                    <label className="form-check-label" for="full_time">Only Fulltime</label>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-3 pb-1">
                    <input name="date" type="date" className="form-control" />
                </div>
                <div className="col-sm-2 col-md-3 col-lg-3 pb-1">
                    <select className="form-control" name="Company">
                        {this.props.location.map(location =>
                            <option value={location}>{location}</option>)
                        }
                    </select>
                </div>
                <div className="col-sm-2 col-md-4 col-lg-4 pt-2 pb-1">
                    <input type="image" className="float-right" alt="Alert" src={require('./../images/alert24.png')} />
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
                    <div onClick={() => this.changeContent(item.id)}>
                        <p>{item.title}</p>
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
        this.state = {
            items: [],
            currentJob: [],
            fullTime: false,
            keyword: '',
            lat: '',
            long: ''
        };
    }

    componentDidMount() {
        let searchURL = baseURL + this.props.search + (this.state.fullTime ? "&full_time=true" : "");
        console.log(searchURL);
        axios.get(searchURL)
            .then(result => {
                this.setState({ items: result.data });
                let firstId = this.state.items[Object.keys(this.state.items)[0]] && this.state.items[Object.keys(this.state.items)[0]].id;
                this.setState({ currentJob: findJobContent(this.state.items, firstId) });
                //this.state.items.map(e => console.log(e));
            })
            .catch(error => {
                console.log(error);
            });
    }

    setFullTime = (state) => {
        this.setState({ fullTime: state }, this.fireOnSelect);
        //() => this.fireOnSelect() 
        //this.fireOnSelect
        this.componentDidMount();
    }

    setCurrentJob = (jobId) => {
        this.setState({ currentJob: findJobContent(this.state.items, jobId) });
    }

    onSubmit = event => {
        event.preventDefault();

        if (this.state.lat && this.state.long & this.state.keyword) {

        } else if (this.state.lat && this.state.long) {

        } else if (this.state.keyword) {

        } else {

        }
    }

    handleChange = (event) => {
        this.changeStateValue(event.target.name, event.target.value);
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
        let component = this;
        return (
            <div>
                <div className="backColor pt-2 pl-3 pr-3 pb-1">
                    <Search />
                </div>

                <div className="container backColor mt-3 mb-3 pl-3 pr-3 pt-3 pb-3">
                    <div className="row">
                        <div className="col-12">
                            <JobSearchFilter handleFullTimeState={component.setFullTime} location={uniq(this.state.items.map(item => item.location))} />
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


            </div>
        );
    }
}

export default withRouter(JobSearchPage);
export { JobSearchFilter, JobSearchList };