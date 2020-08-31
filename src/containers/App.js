import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField, setRequestRobots } from "../actions/Actions";
import { connect } from "react-redux";

const mapStatesToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};
const mapDispatchsToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(setRequestRobots()),
  };
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStatesToProps, mapDispatchsToProps)(App);
