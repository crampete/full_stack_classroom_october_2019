import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewBook from "./components/NewBook";
import SearchBook from "./components/SearchBook";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/new-book">
            <NewBook />
          </Route>

          <Route path="/search-book">
            <SearchBook />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
