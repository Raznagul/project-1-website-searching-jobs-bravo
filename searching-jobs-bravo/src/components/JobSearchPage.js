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
class JobSearchList extends Component {
    constructor() {
        super();
        this.state = { items: [] };
        console.log(this.state);

    }

    componentDidMount() {
        fetch('https://jobs.github.com/positions.json?description=python&location=new+york', {
        //fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            mode: 'cors', cache: 'default',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
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

const UserForSignIn = {
    qty: 0,
};

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { ...UserForSignIn };
    }

    buy = () => {
        var component = this;
        const { qty } = component.state;
        //this.setState((state) => ({ qty: state.qty + 1 }));
        this.setState(byPropKey("qty", component.state.qty + 1));
    }

    show = () => {
        var component = this;
        this.props.handleShow(component.props.name);
        this.props.handletTotal(component.props.price);
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

    submit(e) {
        e.preventDefault();

        //alert("name: " + this.refs.name.value + " - " + this.refs.price.value);

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
                <input type="text" placeholder="product name" ref="name" />
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

    createProduct  = (product) => {
        this.setState({
            productList: this.state.productList.concat(product)
        });
    }

    calculateTotal = (price) => {
        var component = this;
        this.setState({ total: component.state.total + price });
        alert(this.state.total);

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