import React, { Component } from "react";

export class Todo extends Component {
  render() {
    const _color = this.props.myColor
    return (
      <div>
          <h1 style={{ color: _color }}>Hello New Component</h1>
      </div>
    );
  }
}
