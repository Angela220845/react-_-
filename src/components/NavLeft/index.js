import React from "react";
import menuList from "./../../config/menuConfig";
import { Menu } from "antd";
import "./index.less";
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
  //   handleClick = () => {
  //     console.log("菜单");
  //   };
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode
    });
  }
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>;
    });
  };
  render() {
    console.log(menuList);
    return (
      <div>
        <div className="logo">
          <img src="/static/favicon.ico" alt="react" title="react" />
        </div>
        <Menu theme="dark">
          {
            /* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span />
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu> */
            this.state.menuTreeNode
          }
        </Menu>
      </div>
    );
  }
}
