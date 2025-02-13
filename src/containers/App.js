import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// Import the robots data directly
import { robots } from '../robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,  // Use the imported robots data
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    // Filter robots based on search term matching name or email
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase().includes(searchfield.toLowerCase()) || 
        robot.email.toLowerCase().includes(searchfield.toLowerCase())
      );
    })
    return !robots.length ? 
      <h1>Loading</h1> : 
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
