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
      inputText : '',
      inputText1 : '',
      inputText2 : '',
      result : 0
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

  handleOnCombine () {
    let _temp1 = parseInt(this.state.inputText1)
    let _temp2 = parseInt(this.state.inputText2)
    let _result = _temp1 + _temp2
    this.setState({ result : _result })
  }

  handleOnChange (_e) {
    //console.log(_e.target.value)
    this.setState({ inputText : _e.target.value })
  }
  handleOnChange1 (_e) {
    this.setState({ inputText1 : _e.target.value })
  }
  handleOnChange2 (_e) {
    //console.log(_e.target.value)
    this.setState({ inputText2 : _e.target.value })
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
        <Input onChange={(e) => this.handleOnChange(e)} value={this.state.inputText} placeholder="Basic usage" defaultValue="ค่าเริ่มต้น"/>
        <h1>{this.state.inputText}</h1>

        <br/>

        <Input onChange={(e) => this.handleOnChange1(e)} value={this.state.inputText1} defaultValue="ใส่เลขตัวแรก"/>
        <Input onChange={(e) => this.handleOnChange2(e)} value={this.state.inputText2} defaultValue="ใส่เลขตัวที่สอง"/>
        <Button type="primary" onClick={() => this.handleOnCombine()}>เอาเลขมาบวกกัน</Button>
        <h1>{this.state.result}</h1>

      </div>
    );
  }
}

export default App;
