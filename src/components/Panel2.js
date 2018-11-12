import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class Panel2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    // Puling in values (fistName, lastName...)
    const { values, handleChange } = this.props;

    //Text fields and app bar via MuiThemeProvider from material ui library
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Detail" />
          <TextField
            hintText="Enter Your Phone Number"
            floatingLableText="Phone Number"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLableText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLableText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton //Back Button
            label="Back"
            primary={false}
            styles={styles.button}
            onClick={this.back}
          />
          <RaisedButton //Continue Button
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
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

export default Panel2;
