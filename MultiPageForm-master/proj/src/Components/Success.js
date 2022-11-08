import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core/';
import { MuiThemeProvider } from 'material-ui/styles';





export class Success extends Component {


    render() {




        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar>
                        <Toolbar><h1>Success</h1></Toolbar>
                    </AppBar>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Thank you for submission</h1>
                    <p>You will get email for further instructions</p>

                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

export default Success
