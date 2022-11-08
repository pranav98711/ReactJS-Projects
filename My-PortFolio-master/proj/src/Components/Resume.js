import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Internships from './Internships'
import Skills from './Skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <h1>Pranav Sorte</h1><br /><img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png" alt="avatar"
                            className="avatar" /><p>I am pursing my Bachelor's Degree in Electrical Engineering. I look forward to have a successful life</p>
                    </Cell>
                    <Cell col={8} className="resumeRight">
                        <div className="resumeRightContent">
                            <h1>Education</h1>
                            <Education
                                startYear={2014} endYear={2015} name='Secondary School Certificate'
                                description="Maharashtra State Board of Secondary and Higher Secondary Education"
                            />
                            <Education
                                startYear={2015} endYear={2017} name="Higher Secondary Certificate"
                                description="Maharashtra State Board of Secondary and Higher Secondary Education"
                            />
                            <Education
                                startYear={2017} endYear={2021} name="BTech Electrical Engineering"
                                description="Bharatiya Vidya Bhavan's Sardar Patel College of Engineering "
                            />

                            <hr /><hr />
                            <h1>Internships</h1>

                            <Internships name="Indian Railways"
                                description="Helped gain knowledge of the Indian Express Trains" />

                            <Internships name="Godrej Industries Ltd (Ambernath)" description="Electrical motors, transformers ,diesel generators and other electrical machinery basics" />

                            <hr /><hr />
                            <h1>Trainings</h1>
                            <Internships name="Hubspot Inbound Certification"
                                description="Inbound is a method of attracting, engaging and delighting people to grow business" />
                            <hr />

                            <hr />


                            <h1>Skills</h1>
                            <Skills name="Python" value="60" />
                            <Skills name="HTML" value="90" />
                            <Skills name="CSS" value="90" />
                            <Skills name="BOOTSTRAP " value="80" />
                            <Skills name="MS-EXCEL" value="60" />
                            <Skills name="English Proficiency (Spoken)" value="50" />
                            <Skills name="English Proficiency (Written)" value="60" />
                            <Skills name="Java" value="60" />
                            <Skills name="ReactJS" value="70" />


                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume
