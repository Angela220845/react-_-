import React, { Component } from 'react';
import './App.css';
// import Admin from './admin';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Admin/> */
      this.props.children
      }
      </div>
    );
  }
}

export default App;
