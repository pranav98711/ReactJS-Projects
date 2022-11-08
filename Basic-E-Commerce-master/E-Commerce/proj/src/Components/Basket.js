import React, { Component } from 'react'

export class Basket extends Component {


    render() {

        return (
            <div className="alert basket" >
                {this.props.cartItems.length === 0 ? "Basket Empty" : <div> You have {this.props.cartItems.length} number of items </div>}
                {this.props.cartItems.length > 0 &&
                    <div>
                        <ul>
                            {this.props.cartItems.map((item, index) =>
                                <li key={index}>
                                    <hr />
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <b>{item.title}</b>
                                            </div>
                                            <div class="col">
                                                <b>$ {item.price}</b>
                                            </div>

                                            <div class="col">
                                                <button className="removebtn" value={item.id} onClick={this.props.handleRemoveFromCart}>   X</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )}
                            <hr />
                            <li>
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <b>Cart Total:</b>
                                        </div>
                                        <div class="col">
                                            <b> $ {this.props.money}</b>
                                        </div>
                                        <div class="col">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
                <br />
                <button className="checkoutbtn" onClick={() => alert("Your order has been placed")} >Place Order</button>
            </div>
        )
    }
}

export default Basket
