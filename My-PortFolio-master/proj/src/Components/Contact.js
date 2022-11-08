import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div>
                <Grid className="demo-grid-1">
                    <Cell col={6}><h1>Pranav Sorte</h1><br /><img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_male_person_user_work-512.png" alt="avatar"
                        className="avatar" /><p>I am pursing my Bachelor's Degree in Electrical Engineering. I look forward to have a successful life</p></Cell>
                    <Cell col={6}><h1>Contact Me</h1>
                        <hr />
                        <div className="contactme">
                            <List>

                                <ListItem>
                                    <ListItemContent> <i class="fa fa-phone" aria-hidden="true"></i> 9999999999</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent ><i class="fa fa-envelope" aria-hidden="true"></i>   Pranav98711@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent ><i class="fa fa-whatsapp" aria-hidden="true"></i>8888888888</ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact
