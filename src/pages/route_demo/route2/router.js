import React from "react";
import { HashRouter as Route, Router, Switch } from "react-router-dom";
import Main from "./../route1/Main";
import Topics from "./../route1/Topics";
import About from "./../route1/About";

export default class Erouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/main" component={Main} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </Router>
    );
  }
}
