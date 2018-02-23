import React, { Component } from "react";
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List } from "antd";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem: []
    }

  }

  submitList = () => {
    this.setState({
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleChangeText = (_e) => {
    this.setState({inputText: _e.target.value});
  }

  render() {
    const _color = this.props.myColor;
    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
      <Card style={{ width: 500, backgroundColor: _color }}>
        <h1>To-do-list</h1>
        <div
          style={{
            marginBottom: "10px"
          }}
        >
          <Input onChange={(e) => this.handleChangeText(e)} value={this.state.inputText} addonAfter={<Button type="primary" onClick={() => this.submitList()}>Add</Button>} />
        </div>
        <List
          bordered
          dataSource={this.state.listItem}
          renderItem={item => (
            <List.Item
              actions={[
                <a>
                  <Icon
                    type="close-circle"
                    style={{ fontSize: 16, color: "rgb(255, 145, 0)" }}
                  />
                </a>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </Card>
    );
  }
}
