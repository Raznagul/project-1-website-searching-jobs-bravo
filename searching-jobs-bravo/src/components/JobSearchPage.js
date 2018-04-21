import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

class JobSearchFilter extends Component {
    render() {
        return (
            <div>
                <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <input name="firstname" type="date" />
                <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <button type="button" onclick="alert('Hello World!')">Click Me!</button>
            </div>
        );
    }
}

class JobSearchList extends Component {
    render() {
        return (
            <div border-style="solid">
                <p>titulo</p>
                <p>ubicacion</p>
                <p>fecha</p>
            </div>
        );
    }
}

class JobSearchContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={require('./../images/instagram24.png')} className="icon" alt="Instagram" />
                    <div>
                        <p>Company name</p>
                        <p>Direccion</p>
                        <p>Company url</p>
                    </div>
                </div>
                <div>
                    <p>Job tittle</p>
                    <p>Date posted</p>
                    <button type="button" onclick="alert('Hello World!')">save</button>
                </div>
                <div>
                    <p>Description</p>
                    <button type="button" onclick="alert('Hello World!')">How to apply</button>
                </div>
            </div>
        );
    }
}

class JobSearchPage extends Component {
    render() {
        return (
            <div className="landPageContent">
                <JobSearchFilter />
                <JobSearchList />
                <JobSearchContent />
            </div>
        );
    }
}

export default JobSearchPage;

export { JobSearchFilter, JobSearchList, JobSearchContent };