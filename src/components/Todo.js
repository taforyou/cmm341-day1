import React, { Component } from "react";
import {
  Layout,
  Form,
  Input,
  Icon,
  Row,
  Col,
  Button,
  Card,
  List,
  Spin
} from "antd";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      listItem: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // เราควรจะ fetch เพื่อเอาค่ามาจาก MockAPI
    this.fetchGet();
  }

  async fetchGet() {
    const result = await fetch(
      "https://5a8f8f77ae48ee0012de69a1.mockapi.io/todo"
    );
    let data = await result.json();
    console.log(data);
    let listItem = data.map((value, index) => {
      return value.content;
    });
    console.log(listItem);

    this.setState({ listItem, isLoading: false });
  }

  submitList = () => {
    this.setState({
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ""
    });
  };

  deleteListAtIndex = index => {
    // ไม่ควรทำเพราะเป็นการ Render ใหม่ทั้ง State ถ้ามีเยอะก็ฉิบหายยย สิครับ
    //this.state.listItem.splice(index, 1);
    //this.setState({});

    const result = this.state.listItem;
    result.splice(index, 1);
    this.setState({ listItem: result });
  };

  handleChangeText = _e => {
    this.setState({ inputText: _e.target.value });
  };

  handleKeyPress = _e => {
    if (_e.key === "Enter") {
      this.submitList();
    }
  };

  render() {
    const _color = this.props.myColor;
    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    // หลัง Return มันต้องมี DIV ครอบก่อน
    // { if 1==1 ? 'TRUE' : 'FALSE'}
    return (
      <div>
        {this.state.isLoading == false ? (
          <Card style={{ width: 500, backgroundColor: _color }}>
            <h1>To-do-list</h1>
            <div
              style={{
                marginBottom: "10px"
              }}
            >
              <Input
                onKeyPress={e => this.handleKeyPress(e)}
                onChange={e => this.handleChangeText(e)}
                value={this.state.inputText}
                addonAfter={
                  <Button type="primary" onClick={() => this.submitList()}>
                    Add
                  </Button>
                }
              />
            </div>
            <List
              bordered
              dataSource={this.state.listItem}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <a onClick={() => this.deleteListAtIndex(index)}>
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
        ) : (
          <Spin />
        )}
      </div>
    );
  }
}
