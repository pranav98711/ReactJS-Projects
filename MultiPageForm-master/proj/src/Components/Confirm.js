import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core/';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';
import { List, ListItem } from 'material-ui';



export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {

        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;


        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar>
                        <Toolbar><h1>Confirm Your Details</h1></Toolbar>
                    </AppBar>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <List>
                        <ListItem
                            primaryText='First Name'
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText='Last Name'
                            secondaryText={lastName}
                        />

                        <ListItem
                            primaryText='Email'
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText='City'
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText='Bio'
                            secondaryText={bio}
                        />

                    </List>


                    <RaisedButton

                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                    <br /> <br />
                    <RaisedButton

                        label="back"
                        primary={true}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

export default FormPersonalDetails
