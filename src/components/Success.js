import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM // Would semnd data to api to any backend framework
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevstep();
    };

  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Confirm User Details" />
            <h1>Thank you for your Submission</h1>
            <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Success;
