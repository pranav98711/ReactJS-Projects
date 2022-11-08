import React, { Component } from 'react'
import { AppBar, Toolbar, TextField } from '@material-ui/core/';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';



export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar>
                        <Toolbar><h1>Enter User Details</h1></Toolbar>
                    </AppBar>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <TextField
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    /><br />
                    <TextField
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    /><br />
                    <br />
                    <RaisedButton

                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

export default FormUserDetails
