import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HOME from "Routes/Home";

export default () => (
  <Router>
    <Route path="/" exact component={HOME} />
  </Router>
);