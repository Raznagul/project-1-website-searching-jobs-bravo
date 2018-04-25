import React, { Component } from 'react';
import JobSearchContent from './JobSearchContent';
import * as routes from "../constants/routes";
import { Link, withRouter } from "react-router-dom";

class JobSearchList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responsiveScreen: false
        }
    }

    changeContent = (id) => {
        this.props.handletCurrentContent(id);
    }

    changeResponsiveContent = () => {
        this.setState({ responsiveScreen: this.state.responsiveScreen === true ? false : true });
    }

    getFormattedDate(date) {
        return new Date(date).toDateString("MM-dd");
    }

    render() {
        if (this.state.responsiveScreen === false) {
            return (
                <div>
                    {this.props.jobList.map(item =>
                        <div>
                            <div onClick={() => this.changeContent(item.id)} className="border-bottom pb-2 pt-2 listElement d-none d-md-block">
                                <b><a>{item.title}</a></b><br />
                                <a className="small">{item.location}</a><br />
                                <a className="small">{new Intl.DateTimeFormat('en-US').format(new Date(item.created_at))}</a>
                            </div>
                            <div onClick={() => this.changeResponsiveContent()} className="border-bottom pb-2 pt-2 listElement d-md-none d-lg-none d-xl-none">
                                <b><a>{item.title}</a></b><br />
                                <a className="small">{item.location}</a><br />
                                <a className="small">{new Intl.DateTimeFormat('en-US').format(new Date(item.created_at))}</a>
                            </div>
                        </div>
                    )}
                </div>
            );
        } else {
            return (
                <div>
                    <div onClick={() => this.changeResponsiveContent()} className="border-bottom pb-3 pt-2  ">
                        <input type="image" alt="" src={require('./../images/back24.png')} />
                        <b>  BACK</b>
                    </div>
                    <JobSearchContent jobContent={this.props.jobContent} />
                </div>
            );
        }

    }
}

export default withRouter(JobSearchList);