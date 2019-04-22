import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM // Would semnd data to api to any backend framework
        this.props.nextStep();
    };

  render() {
      const { values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Enter Personal Details" />
            <TextField 
                hintText = "Enter Your Occupation"
                floatingLabelText = "First Name"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}
            />
            <br/>
            <TextField 
                hintText = "Enter Your City"
                floatingLabelText = "City"
                onChange = {handleChange('city')}
                defaultValue = {values.city}
            />
            <br/>
            <TextField 
                hintText = "Enter Your Bio"
                floatingLabelText = "Bio"
                onChange = {handleChange('bio')}
                defaultValue = {values.bio}
            />
            <br/>
            <RaisedButton 
            label = "Continue"
            primary = {true}
            style={styles.button}
            onclick = {this.continue}
            />
            <RaisedButton 
            label = "Back"
            primary = {false}
            style={styles.button}
            onclick = {this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;
