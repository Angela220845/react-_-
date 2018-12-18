import React from 'react';
export default class Child extends React.Component{
  constructor(){
    super()
    this.state ={
    }
  }
  componentWillMount(){
    console.log('will mount');//{aaa: 0, xxx: "aaaa"}
  }
  componentDidMount(){
    console.log('did mount')

  }
  componentWillReceiveProps(newProps){
    console.log('will props'+newProps.aaa)

  }
  shouldComponentUpdate(){
    console.log('should update');
    return true
  }
  componentWillUpdate(){
    console.log('will update');
  }
  componentDidUpdate(){
    console.log('did update');
  }
  render(){
    return (
      <div>
        <p onClick={()=>{
        }}>我是子组件{this.props.xxx}</p>
      </div>
    )
  }
}
