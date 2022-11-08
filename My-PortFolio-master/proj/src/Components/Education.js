import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>

                    <p>: {this.props.name} </p>
                    <p>{this.props.description}</p>

                </Cell>


            </Grid>
        )
    }
}

export default Education
