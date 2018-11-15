import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Panel4 extends Component {
  continue = e => {
    e.preventDefault();
    //Start sending data to API here
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    //Basic Text and app bar via MuiThemeProvider from material ui library
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="We Got It!" />
          <h1>Thank You for Your Submission</h1>
          <p>You will get an email with futher instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Panel4;
