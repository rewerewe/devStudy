import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HOME from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Route path="/" exact component={HOME} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" exact component={Search} />
  </Router>
);