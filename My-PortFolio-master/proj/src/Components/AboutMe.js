import React, { Component } from 'react'
import { Grid } from 'react-mdl'

class AboutMe extends Component {
    render() {
        return (
            <Grid className="demo-grid-aboutme">

                <p class="text-justify aboutme">
                    <h1>About Me</h1>
                    <hr />
                    <br />
                    <br />
                    I am currently pursuing my Bachelor's Degree in Electrical Engineering from Sardar Patel College of Engineering, Andheri. <br />
                    I have learnt a few programming languages which include Java, HTML, CSS, Python, ReactJS, NodeJS. I am a self-learner, I have learnt all of these
                    on my own with the help of books and this generation's best teacher - Youtube. I look forward to get a Master's Degree of Business Administration.
                    <br />I will work tirelessly to bring desired output for the organization or the company i will work for.
                </p>
            </Grid>
        )
    }
}

export default AboutMe
