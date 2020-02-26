import React from 'react';
import './App.css';
import axios from 'axios';

import Nav from './component/Nav/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jumbotron from './component/Jumbo/Jumbotron';
import Search from './component/Search/Search'

axios.get(`https://www.googleapis.com/books/v1/volumes?q=`);

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <br />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Jumbotron />
              <Search />
            </div>
          </Route>
          <Route exact path="/saved">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
