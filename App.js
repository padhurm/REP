import React from "react";
import Router from "./src/router";
import store from '../REP/src/store';
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;