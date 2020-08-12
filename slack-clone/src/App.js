import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
