import React from "react";
import "./index.less";
import { Row, Col } from "antd";
import Util from '../../utils/utils'
export default class Header extends React.Component {
    state={
        userName:''
    }
  componentWillMount() {
    let userName = '小仙女'
    this.setState({
      userName
    });
    setInterval(()=>{
        Util.formatDate(new Date().getTime());
    },1000)
  }
  render() {
    return (
      <div>
        <Row>
          <Col span="24" className="header">
            <span>欢迎，{this.state.userName}</span>
            <a href="/a">退出</a>
          </Col>
        </Row>
        <Row className="body">
          <Col span="4" className="breadcrumb">首页</Col>
          <Col span="20" className="message"><span className="time"></span>
          <span className="weather">晴转多云</span></Col>
        </Row>
      </div>
    );
  }
}
