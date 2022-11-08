import React, { Component } from 'react'
import { AppBar, Toolbar, TextField } from '@material-ui/core/';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';


export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
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
                        label="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    /><br />
                    <TextField
                        label="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />


                    <br /> <br />
                    <RaisedButton

                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    /><br /> <br />

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
