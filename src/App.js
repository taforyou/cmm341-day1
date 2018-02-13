import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter : 99,
      counterrrrr : 88,
    }

  }

  handleOnAdd () {
    console.log('handleOnAdd');
  }

  render() {
    return (
      <div className="App">
        Hello World CMM341
        <br/>
        <h1>{this.state.counter}</h1>
        <h2>{this.state.counterrrrr}</h2>
        <button type="button" onClick={() => this.handleOnAdd()}>Click Me!</button>
      </div>
    );
  }
}

export default App;
