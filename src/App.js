import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "antd/lib/button";
import "./App.css";
import { Menu, Carousel, Card, Row, Col, Rate } from "antd";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counterrrrr: 88
    };
  }

  handleOnAdd() {
    console.log("handleOnAdd");
    // ค่าเปลัี่ยนนะแต่ render() ไม่ทำงานมันจึงไม่ show ค่าใหม่
    //this.state.counter++
    //console.log(this.state.counter)
    let temp = this.state.counter;
    temp++;

    this.setState({
      counter: temp
    });

    // อย่าทำเพราะเป็นการ Mutate state (จริงๆทำได้ แทนบรรทัดที่ 21>>26 เลย)
    // this.setState({
    //   counter : this.state.counter++
    // })
  }

  render() {
    return (
      <div>
        <div className="header">
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="product">
              <h3>Product</h3>
            </Menu.Item>
            <Menu.Item key="About">
              <h3>About</h3>
            </Menu.Item>
          </Menu>
        </div>
        <div className="content">
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          <div className="gutter-example">
            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  <div className="custom-image">
                    <img
                      alt="example"
                      width="100%"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    <p>
                      <Rate />
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="custom-image">
                    <img
                      alt="example"
                      width="100%"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    <p>
                      <Rate />
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="custom-image">
                    <img
                      alt="example"
                      width="100%"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    <p>
                      <Rate />
                    </p>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <div className="custom-image">
                    <img
                      alt="example"
                      width="100%"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                    <p>
                      <Rate />
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <style jsx global>{`
          .ant-carousel .slick-slide {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #367279;
            overflow: hidden;
          }

          .ant-carousel .slick-slide h3 {
            color: #fff;
          }
          .custom-image img {
            display: block;
          }
          .custom-card {
            padding: 10px 0px;
          }
          .custom-card p {
            color: #999;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
