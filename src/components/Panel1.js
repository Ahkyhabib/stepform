import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import BottomNavigation from "material-ui/BottomNavigation";

export class Panel1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    // Puling in values (fistName, lastName...)
    const { values, handleChange } = this.props;

    //Text fields and app bar via MuiThemeProvider from material ui library
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Detail" />
          <TextField
            hintText="Enter Your First Name"
            floatingLableText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLableText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLableText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton //Continue Button
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
          <BottomNavigation />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 0
  }
};

export default Panel1;
