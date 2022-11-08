import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <br />
                        <br />
                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png" alt="avatar"
                            className="avatar" />

                        <div className="banner-text">
                            <h1>  Budding Developer</h1>
                            <hr />
                            <p>Java | HTML | CSS | PYTHON | ReactJS | NodeJS </p>

                            <div className="social-links">
                                {/* _blank -- it will open link in new tab*/}
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage
