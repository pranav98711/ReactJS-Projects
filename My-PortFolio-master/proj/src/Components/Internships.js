import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Internships extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.name}  </p>
                </Cell>
                <Cell col={8}>
                    <p>: {this.props.description} </p>
                </Cell>
            </Grid>
        )
    }
}

export default Internships
