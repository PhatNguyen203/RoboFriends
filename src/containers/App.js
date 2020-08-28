import React, { Component } from "react";
import CardList from "../components/CardList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
