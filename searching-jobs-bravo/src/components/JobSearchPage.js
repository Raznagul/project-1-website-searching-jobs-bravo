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
/*
class ItemListerasd extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('https://jobs.github.com/positions.json?description=python&location=new+york')
            .then(result => {
                this.setState({ items: result.json() });
            });
    }

    render() {
        return (
            <div>
                <div>Items:</div>
                {this.state.items.map(item => { return <div>{item.name}</div> })}
            </div>
        );
    }
}
*/
class ItemLister extends Component {
    constructor() {
        super();
        this.state = { items: [] };
        console.log(this.state);

    }

    componentDidMount() {
        //fetch('https://jobs.github.com/positions.json?description=python&location=new+york', {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            mode: 'cors', cache: 'default',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' ,
            },
        }).then(result => result.json())
        .then(items => this.setState({ items }));
        /*
         fetch('https://jobs.github.com/positions.json?description=python&location=new+york', { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' }, mode: 'cors', cache: 'default' })
             .then(result => result.json())
             .then(items => this.setState({ items }));
             */
        console.log(this.result);
        console.log(this.items);
    }

    render() {
        return (
            <div>
                {this.result}

                <ul>
                    {this.state.items.map(item => <li>{item.name}</li>)}
                </ul>
            </div>
        );
    }
}
/*
class ItemListerzxc extends Component {

    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        var component = this;
        fetch("https://api.github.com/users/Raznagul", function (data) {
            component.setState(data);
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <img src={this.state.avatar_url} width="80" />
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
*/
export default ItemLister;

export { JobSearchFilter, JobSearchList, JobSearchContent };