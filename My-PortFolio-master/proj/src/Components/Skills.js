import React, { Component } from 'react'
import { ProgressBar, Grid, Cell } from 'react-mdl'

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.name} </p>
                </Cell>
                <Cell col={8}>
                    <ProgressBar className="progress" progress={this.props.value} />
                </Cell>
            </Grid>
        )
    }
}

export default Skills
