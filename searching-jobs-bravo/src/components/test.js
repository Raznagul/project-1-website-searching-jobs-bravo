import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';

import { Link } from "react-router-dom";

import axios from 'axios';

const uniq = a => [...new Set(a)];

const findJobContent = (a, id) => {
    return a.find(item => item.id === id);
};

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

export default ProductList;