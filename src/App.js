import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input ,Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter : 0,
      counterrrrr : 88,
      inputText : ''
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

  handleOnChange (_e) {
    console.log(_e.target.value)
  }

  render() {
    return (
      <div className="App">
        Hello World CMM341
        <br/>
        <h1>{this.state.counter}</h1>
        <h2>{this.state.counterrrrr}</h2>
        <Button type="primary" onClick={() => this.handleOnAdd()}>Click Me!</Button>
        <br/>
        <Input onChange={(e) => this.handleOnChange(e)} placeholder="Basic usage" />
      </div>
    );
  }
}

export default App;
