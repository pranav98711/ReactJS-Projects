import React, { Component } from 'react';
import Products from './Products'
import Filter from './Filter'
import Basket from './Basket'
import './Mains.css'

let count = 0;
let money = 0;

export class BackupMains extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            filteredProducts: [],
            cartItems: [],
            sort: 'select',
            size: '',


        }

        this.handleChangeSort = this.handleChangeSort.bind(this)
        this.handleSortSubmit = this.handleSortSubmit.bind(this)
        this.handleSizeSubmit = this.handleSizeSubmit.bind(this)
        this.handleChangeSize = this.handleChangeSize.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)

    }

    componentDidMount() {
        fetch('http://192.168.1.209:8000/products/')
            .then(res => res.json())
            .then(data => this.setState({
                products: data,
                filteredProducts: data,

            }));
    }

    handleAddToCart(e, products) {
        let n = e.target.value;
        this.setState(m => {
            m.products.map(item => {
                if (n == item.id) {
                    this.state.cartItems.push(item)
                    money = money + item.price;
                    console.log('money', money)
                    count = count + 1;
                }
            })
            return this.state.cartItems
        }
        )
    }

    handleRemoveFromCart(e, products) {
        let n = e.target.value;
        this.setState(m => {
            m.products.map(item => {
                if (n == item.id) {
                    this.state.cartItems.splice(item, 1)

                    money = money - item.price;
                    console.log('money', money)
                    count = count - 1;
                }
            })
            return this.state.cartItems
        })
    }

    handleChangeSort(e) {
        this.setState({ sort: e.target.value });
        //on changing select from Filter.js this.state.sort value will be changed 
    }

    handleChangeSize(e) {
        this.setState({ size: e.target.value })
    }

    handleSortSubmit(e) {
        this.listProducts()
        //after clicking submit button from Filter.js, this will execute
        e.preventDefault();
        // to prevent page from reloading, else after submit button the page reloads
    }

    handleSizeSubmit(e) {

        this.listProducts()
        e.preventDefault();
    }

    listProducts() {
        this.setState(m => {
            if (m.sort == 'toLow') {
                m.products.sort(function (a, b) { return b.price - a.price })
            }
            else if (m.sort == 'toHigh') {
                m.products.sort(function (a, b) { return a.price - b.price })
            }
            else {
                m.products.sort(function (a, b) { return 0.5 - Math.random() });
            }
            if (m.size !== '') {
                return {
                    filteredProducts: this.state.products.filter(a =>
                        a.availableSizes.indexOf(m.size.toUpperCase()) >= 0
                    )
                }
            }
            return { filteredProducts: m.products }
        })
    }

    render() {
        return (
            <div className="main border border-dark rounded">
                <div className="navig jumbotron " >
                    <h1 className="navi d-flex justify-content-center">E commerce </h1>
                    <hr />
                    <p className="lead d-flex justify-content-center">Shop your favourite brands with amazing offers!.</p>
                </div>
                <br />
                <div className="border">
                    <Filter count={this.state.filteredProducts.length} sort={this.state.sort} handleChangeSort={this.handleChangeSort} handleSortSubmit={this.handleSortSubmit}

                        size={this.state.size} handleChangeSize={this.handleChangeSize} handleSizeSubmit={this.handleSizeSubmit} />
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
                    </div>
                    <div className="col-md-4">
                        <Basket money={money} cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
                    </div>
                </div>
            </div>
        )
    }
}




export default BackupMains;
