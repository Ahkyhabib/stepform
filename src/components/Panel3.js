import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Panel3 extends Component {
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
    // Pulling in values (fistName, lastName...)
    const {
      values: { fistName, lastName, email, phone, city, bio }
    } = this.props;

    //Conformation List and app bar via MuiThemeProvider from material ui library
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Conformation" />
          <List>
            <ListItem primaryText="First Name" secondaryText={fistName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Phone Number" secondaryText={phone} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Your Bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton //Back Button
            label="Back"
            primary={false}
            styles={styles.button}
            onClick={this.back}
          />
          <RaisedButton //Continue Button
            label="Confirm & Continue"
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

export default Panel3;
