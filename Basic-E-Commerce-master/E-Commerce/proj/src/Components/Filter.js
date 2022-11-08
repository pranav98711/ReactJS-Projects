import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div className="row filternav navitext "  >
                < div className="col-md-4 d-flex justify-content-center " >
                    {this.props.count} products
                </div >
                <div className="col-md-4 ">
                    <form onSubmit={this.props.handleSortSubmit}>
                        <label>
                            Order by
                        <select className="form-control" value={this.props.sort}
                                onChange={this.props.handleChangeSort}>
                                {/* here we set value insitally as default given by "sort" */}
                                <option value="select">Select</option>
                                <option value="toHigh">Lowest to Highest</option>
                                <option value="toLow">Highest to Lowest</option>

                            </select>
                        </label>
                        <input type="submit" value="Apply" className="applybtn" />
                    </form>
                </div>
                <div className="col-md-4">
                    <form onSubmit={this.props.handleSizeSubmit} >
                        <label>Size
                        <select className="form-control " value={this.props.size}
                                onChange={this.props.handleChangeSize}>
                                <option value="">All</option>
                                <option value="x">X</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        </label>
                        <input type="submit" value="Apply" className="applybtn" />
                    </form>


                </div>

            </div >
        )
    }
}

export default Filter
