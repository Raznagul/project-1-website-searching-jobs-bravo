import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

import axios from 'axios';

class JobSearchFilter extends Component {

    show = () => {
        alert('Hello World!');
    }

    render() {

        return (
            <div>
                <select name="Type">
                    <option value="Type">Type</option>
                </select>
                <input name="date" type="date" />
                <select name="Company">
                    <option value="Company">Company</option>
                </select>
                <button class="justify-content-end" type="button" onClick={this.show}>Click Me!</button>
            </div>
        );
    }
}
/*
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
*/
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

            <div className="container ">
                <div className="row">
                    <div class="col-sm ">
                        <JobSearchFilter />
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-3">
                        <JobSearchList />
                    </div>
                    <div class="col-sm-9">
                        <JobSearchContent />
                    </div>
                </div>
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
class JobSearchList extends Component {
    constructor() {
        super();
        this.state = { items: [] };
        console.log(this.state);

    }

    componentDidMount() {
        //axios.get('https://jobs.github.com/positions.json?description=python&location=new+york')
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            this.setState({items:result.data});
            this.state.items.map(e => console.log(e));
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map(item =>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                    </div>
                )}
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

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { qty: 0 };
    }

    buy = () => {
        //this.setState((state) => ({ qty: state.qty + 1 }));
        this.setState(byPropKey("qty", this.state.qty + 1));
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

export default JobSearchList;

export { JobSearchFilter, JobSearchList, JobSearchContent };