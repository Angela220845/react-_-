import React  from 'react';
import Child from './Child';
import './index.less'
import {Button} from 'antd'
export default class Life extends React.Component{
  constructor(props){
  super(props)
  this.state={
    count:0,
    name:'aaaa'
  }

  }
  handle=()=>{
    this.setState({
      count:++this.state.count
    })
  }
  render(){
    let style = {
      color:'red'
    }
    return (
      <div>
        <p className="content">React生命周期</p>
        <Button onClick={ this.handle} type="primary">点击</Button>
        <p style={style}>{this.state.count}</p>
        <Child xxx={this.state.name} aaa={this.state.count}/>
      </div>
    )
  }
}
