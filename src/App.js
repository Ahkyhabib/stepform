import React, { Component } from "react";
import "./App.css";
import ParentUserForm from "./components/ParentUserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentUserForm />
      </div>
    );
  }
}

export default App;
