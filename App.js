import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Router from "./src/Router";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
