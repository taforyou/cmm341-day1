import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter : 99,
    }

  }
  render() {
    return (
      <div className="App">
        Hello World CMM341
        <br/>
        <h1>{this.state.counter}</h1>
        <button type="button">Click Me!</button>
      </div>
    );
  }
}

export default App;
