import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

import axios from 'axios';

const uniq = a => [...new Set(a)];

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
                <select name="Type">
                    {this.props.type.map(type =>
                        <option value={type}>{type}</option>)
                    }
                </select>
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
        console.log(this.props.jobContent.company);
    }

    render() {
        return (
            <div>
                <div>
                    <img src={require('./../images/instagram24.png')} className="icon" alt="Instagram" />
                    <div>
                        <p>Company name: {this.props.company}</p>
                        <p>Direccion: {this.props.location} </p>
                        <p>Company url: {this.props.company_url} </p>
                    </div>
                </div>
                <div>
                    <p>Job tittle: {this.props.title} </p>
                    <p>Date posted: {this.props.created_at} </p>
                    <button type="button">save</button>
                </div>
                <div>
                    <p>Description: {this.props.description} </p>
                    <p>How to apply: {this.props.how_to_apply} </p>
                    <button onClick={this.show} type="button">How to apply</button>
                </div>
            </div>
        );
    }
}

class JobSearchList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {this.props.jobList.map(item =>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.location}</p>
                        <p>{item.created_at}</p>
                    </div>
                )}
            </div>
        );
    }
}

class JobSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };

    }

    componentDidMount() {
        axios.get('https://jobs.github.com/positions.json?description=python&location=new+york')
            .then(result => {
                this.setState({ items: result.data });
                //this.state.items.map(e => console.log(e));
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.items.find(item => item.id === "40af75b0-43da-11e8-8421-06fdf93a68d5"));
        return (

            <div className="container ">
                <div className="row">
                    <div className="col-sm ">
                        <JobSearchFilter type={uniq(this.state.items.map(item => item.type))} location={uniq(this.state.items.map(item => item.location))} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <JobSearchList jobList={this.state.items.map(({ title, location, created_at }) => ({ ["title"]: title, ["location"]: location, ["created_at"]: created_at }))} />
                    </div>
                    <div className="col-sm-9">
                        <JobSearchContent jobContent={this.state.items.map(item => {
                            if (item.id === "40af75b0-43da-11e8-8421-06fdf93a68d5") {
                                console.log(item);
                                return item;
                            }

                        }

                        )} />
                    </div>
                </div>
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

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { qty: 0 };
    }

    buy = () => {
        this.setState((state) => ({ qty: state.qty + 1 }));
        //this.setState(qty: this.state.qty + 1);
        this.props.handletTotal(this.props.price);
    }

    show = () => {
        this.props.handleShow(this.props.name);
    }

    render() {
        return (
            <div>
                <p>{this.props.name} - {this.props.price}</p>
                <button onClick={this.buy} >Buy</button>
                <button onClick={this.show} >Show</button>
                <h3>Qty: {this.state.qty} items</h3>
                <hr />
            </div>

        );
    }
}

class Total extends Component {

    render() {
        return (
            <div>
                <h3>Total cash: {this.props.total} </h3>
            </div>
        );
    }
}

class ProductForm extends Component {

    submit = (e) => {
        e.preventDefault();

        var product = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }

        this.props.handleCreate(product);

        this.refs.name.value = "";
        this.refs.price.value = "";

    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" placeholder="product name" ref="name" /> -
                <input type="text" placeholder="product price" ref="price" />
                <br />
                <button  >Create product</button>
                <hr />
            </form>
        );
    }
}

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            productList: [
                { name: "android", price: 121 },
                { name: "apple", price: 123 },
                { name: "nokia", price: 65 }
            ]
        };
    }

    createProduct = (product) => {
        this.setState({
            productList: this.state.productList.concat(product)
        });
    }

    calculateTotal = (price) => {
        this.setState({ total: this.state.total + price });

    }

    showProduct = name => {
        alert("you selected " + name)
    }

    render() {
        var component = this;
        var products = this.state.productList.map(function (product) {
            return (
                <Product name={product.name} price={product.price}
                    handleShow={component.showProduct}
                    handletTotal={component.calculateTotal} />
            )
        });

        return (
            <div>
                <ProductForm handleCreate={this.createProduct} />
                {products}
                <Total total={this.state.total} />
            </div>
        );
    }
}

export default JobSearchPage;

export { JobSearchFilter, JobSearchList, JobSearchContent };