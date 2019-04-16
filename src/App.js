import React, { Component } from "react";
import store from "./store/index";
import RepoSearch from "./RepoSearch";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Exercise 4 (Ajax call)</h1>
        <RepoSearch store={store} />
      </div>
    );
  }
}
export default App;
