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
    console.log('handleOnAdd')
    // ค่าเปลัี่ยนนะแต่ render() ไม่ทำงานมันจึงไม่ show ค่าใหม่
    //this.state.counter++
    //console.log(this.state.counter)
    let temp = this.state.counter;
    temp++;
    
    this.setState({
      counter : temp
    })

    // อย่าทำเพราะเป็นการ Mutate state (จริงๆทำได้ แทนบรรทัดที่ 21>>26 เลย)
    // this.setState({
    //   counter : this.state.counter++
    // })

    
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
