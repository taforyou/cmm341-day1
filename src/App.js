import React, { Component } from "react";
import "./App.css";
import { Todo } from './components/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo myColor={'red'}/>
        <Todo myColor={'green'}/>
        <Todo myColor={'blue'}/>
      </div>
    );
  }
}

export default App;
