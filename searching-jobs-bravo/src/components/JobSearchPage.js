import React, { Component } from 'react';
import Search from './Search';
import './../styles/css/style.css';
import { db, firebase } from "../firebase";
import * as routes from '../constants/routes';

import { Link, withRouter } from "react-router-dom";

import JobSearchContent from './JobSearchContent';

import axios from 'axios';

const uniq = a => [...new Set(a)];

const findJobContentById = (a, id) => {
    if (typeof a !== 'undefined' && a.length > 0) {
        return a.find(item => item.id === id);
    }
};

class JobSearchFilter extends Component {

    constructor(props) {
        super(props);

    }

    changeFullTime = (event) => {
        this.props.handleFullTimeState((event.target.checked ? "Full Time" : "-"));
    }

    changeDate = (event) => {
        let dateDarts = event.target.value.split('-');
        this.props.handleDateState(new Date(dateDarts[0], dateDarts[1] - 1, dateDarts[2]));
    }

    changeCompany = (event) => {
        this.props.handleCompanyState(event.target.value);
    }

    render() {

        return (
            <div className="row pb-3">
                <div className="col-sm-1 col-md-2 col-lg-2 pl-5 pt-1 pb-1">
                    <input className="form-check-input" defaultChecked={false} onChange={this.changeFullTime} type="checkbox" name="full_time" id="full_time" />
                    <label className="form-check-label" for="full_time">Only Fulltime</label>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-3 pb-1">
                    <input name="date" type="date" className="form-control" onChange={this.changeDate} />
                </div>
                <div className="col-sm-2 col-md-3 col-lg-3 pb-1">
                    <select className="form-control" name="Company" onChange={this.changeCompany}>
                        <option disabled selected value>-- Company --</option>
                        {this.props.company.map(company =>
                            <option value={company}>{company}</option>)
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

    getFormattedDate(date) {
        return new Date(date).toDateString("MM-dd");
    }

    render() {

        return (
            <div>
                {this.props.jobList.map(item =>
                    <div onClick={() => this.changeContent(item.id)} className="border-bottom pb-2 pt-2 listElement">
                        <b><a>{item.title}</a></b><br />
                        <a className="small">{item.location}</a><br />
                        <a className="small">{this.getFormattedDate(item.created_at)}</a>
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
            itemsToShow: [],
            currentJob: [],
            fullTimeFilterData: '-',
            dateFilterData: '',
            companyFilterData: '-',
            keyword: '',
            lat: '',
            long: ''
        };
    }


    componentDidMount() {
        var params = (typeof this.props.match.params.search !== 'undefined' ? this.props.match.params.search : "") + (this.state.fullTime ? "&full_time=true" : "");
        this.requestAPI(params);
    }

    requestAPI(params) {
        let searchURL = baseURL + params;
        console.log(searchURL);
        axios.get(searchURL)
            .then(result => {
                this.setState({ items: result.data });
                this.setState({ itemsToShow: result.data });
                let firstId = this.state.items[Object.keys(this.state.items)[0]] && this.state.items[Object.keys(this.state.items)[0]].id;
                this.setState({ currentJob: findJobContentById(this.state.items, firstId) });
                //this.state.items.map(e => console.log(e));
            })
            .catch(error => {
                console.log(error);
            });
    }

    filterFullTime = (state) => {
        this.setState({ fullTimeFilterData: state }, this.fireOnSelect);
        this.runFilters(state, "fullTime");
    }

    filterDate = (state) => {
        this.setState({ dateFilterData: state }, this.fireOnSelect);
        this.runFilters(state, "date");
    }

    filterCompany = (state) => {
        this.setState({ companyFilterData: state }, this.fireOnSelect);
        this.runFilters(state, "state");
    }

    runFilters(currentChange, filter) {
        let tempItems = this.state.items;
        if ((filter === "fullTime" ? currentChange : this.state.fullTimeFilterData) !== "-") {
            tempItems = tempItems.filter(item => item.type === (filter === "fullTime" ? currentChange : this.state.fullTimeFilterData));
        }

        if ((filter === "date" ? currentChange : this.state.dateFilterData) !== "") {
            tempItems = tempItems.filter(item => (new Date(item.created_at)).getTime() >= (filter === "date" ? (currentChange.getTime()) : (this.state.dateFilterData.getTime())));
        }

        if ((filter === "state" ? currentChange : this.state.companyFilterData) !== "-") {
            tempItems = tempItems.filter(item => item.company === (filter === "state" ? currentChange : this.state.companyFilterData));
        }
        let firstId = tempItems[Object.keys(tempItems)[0]] && tempItems[Object.keys(tempItems)[0]].id;
        this.setState({ currentJob: findJobContentById(tempItems, firstId) });
        this.setState({ itemsToShow: tempItems });

        console.log("companyFilterItems");
        console.log(this.state.itemsToShow);

    }

    setCurrentJob = (jobId) => {
        this.setState({ currentJob: findJobContentById(this.state.items, jobId) });
    }

    onSubmit = event => {
        event.preventDefault();
        var params = "";
        if (this.state.lat && this.state.long && this.state.keyword) {
            params = "/description=" + this.state.keyword + "&lat=" + this.state.lat + "&long=" + this.state.long;
        } else if (this.state.lat && this.state.long) {
            params = "/lat=" + this.state.lat + "&long=" + this.state.long;
        } else if (this.state.keyword) {
            params = "/description=" + this.state.keyword;
        }

        this.requestAPI(params);
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
                    <Search setLatLong={this.setLatLong} handleChange={this.handleChange} onSubmit={this.onSubmit} />
                </div>

                <div className="container backColor mt-3 mb-3 pl-3 pr-3 pt-3 pb-3 border-top">
                    <div className="row">
                        <div className="col-12">
                            <JobSearchFilter handleFullTimeState={component.filterFullTime} handleDateState={component.filterDate} handleCompanyState={component.filterCompany} company={uniq(this.state.items.map(item => item.company))} />
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-sm-3 border-right">
                            <JobSearchList handletCurrentContent={component.setCurrentJob} jobList={this.state.itemsToShow.map(({ id, title, location, created_at }) => ({ ["id"]: id, ["title"]: title, ["location"]: location, ["created_at"]: created_at }))} />
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