import React, { Component } from 'react'


export class Products extends Component {
    render() {

        const productItems = this.props.products.map((product, index) =>
            <div className="col-md-4" key={index}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
                        <img src={`/products/${product.sku}.jpg`} alt={product.title} />
                        <p>
                            <br />
                            {product.title}
                        </p>

                    </a>

                    <div>
                        <b> $ {product.price}</b> <br />
                        <button className="buttonAdd" value={product.id}

                            onClick={this.props.handleAddToCart}>  Add To Cart</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div >
        )

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default Products
