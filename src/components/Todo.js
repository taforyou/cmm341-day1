import React, { Component } from "react";
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List } from "antd";

export class Todo extends Component {
  render() {

    const _color = this.props.myColor
    const data = ["text 1", "text 2", "text 3"];
    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
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
    );
  }
}
