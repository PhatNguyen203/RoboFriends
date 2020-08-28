import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
