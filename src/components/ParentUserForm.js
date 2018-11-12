import React, { Component } from "react";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";

export class ParentUserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle Field Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // This figures what step, and depending on the step, what component to displayed
  render() {
    // Destructure by pulling from states
    const { step } = this.state;
    const { fistName, lastName, email, phone, city, bio } = this.state;
    const values = { fistName, lastName, email, phone, city, bio };

    // Next/prev step functionality
    switch (step) {
      case 1:
        return (
          <Panel1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Panel2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Panel3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Panel4 />;

      // case 5:
      //   return <Style />;
    }
  }
}

export default ParentUserForm;
