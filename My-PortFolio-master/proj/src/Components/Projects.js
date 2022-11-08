import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button, CardActions } from 'react-mdl'


class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }



    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (<Card shadow={0} style={{ width: '500px', height: '500px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(https://user-images.githubusercontent.com/58882791/71558747-842bdd80-2a7c-11ea-96e7-b7cc7494ed58.png) ' }}>Basic Clock</CardTitle>
                <CardText>
                    A Basic Clock app using ReactJS. You can even hide or show today's date with a simple click!
            </CardText>
                <CardActions border>
                    <a href="https://github.com/pranav98711/ReactClock" >
                        <Button colored>View on Github</Button></a>
                </CardActions>

            </Card>

            )
        } else if (this.state.activeTab === 1) {
            return (<Card shadow={0} style={{ width: '500px', height: '500px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(https://user-images.githubusercontent.com/58882791/71559558-8cd4e180-2a85-11ea-9128-59603b82da24.png) ' }}>Movie Cards</CardTitle>
                <CardText>
                    Book Tickets using React Movie Cards with amazing offers now!
            </CardText>
                <CardActions border>
                    <a href="https://github.com/pranav98711/ReactMovieCards" >
                        <Button colored>View on Github</Button></a>
                </CardActions>
            </Card>)
        } else if (this.state.activeTab === 2) {
            return (<Card shadow={0} style={{ width: '500px', height: '500px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(https://user-images.githubusercontent.com/58882791/71558836-61e68f80-2a7d-11ea-807e-77acf61aebde.png) ' }}>E-Commerce Website</CardTitle>
                <CardText>
                    My personal E-Commerce website built using ReactJS
            </CardText>
                <CardActions border>
                    <a href="https://github.com/pranav98711/Basic-E-Commerce" >
                        <Button colored>View on Github</Button></a>
                </CardActions>
            </Card>)
        } else if (this.state.activeTab === 3) {
            return (<Card shadow={0} style={{ width: '500px', height: '500px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(https://user-images.githubusercontent.com/58882791/71559516-12a45d00-2a85-11ea-8aff-71983bfbecbb.png)' }}>Survey Form</CardTitle>
                <CardText>
                    A simple and fast multi page form for surveys using ReactJS 
            </CardText>
                <CardActions border>
                    <a href="https://github.com/pranav98711/MultiPageForm" >
                        <Button colored>View on Github</Button></a>
                </CardActions>
            </Card>)
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.setState.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>Basic Clock </Tab>
                    <Tab>Movie cards</Tab>
                    <Tab>E-Commerce Website</Tab>
                    <Tab>Survey Form</Tab>

                </Tabs>


                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>



                </section>
            </div>
        )
    }
}

export default Projects
