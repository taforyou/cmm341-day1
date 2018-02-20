import React, { Component } from "react";

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List } from "antd";

import "./App.css";
import { Todo } from './components/Todo'

class App extends Component {
  render() {
    const data = ["text 1", "text 2", "text 3"];

    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
      <div className="App">
        <Todo />
        <Card style={{ width: 500 }}>
          <h1>To-do-list</h1>
          <div
            style={{
              marginBottom: "10px"
            }}
          >
            <Input addonAfter={<Button type="primary">Add</Button>} />{" "}
          </div>
          <List
            bordered
            dataSource={data}
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
      </div>
    );
  }
}

export default App;
