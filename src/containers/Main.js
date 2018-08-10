import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Shelves from './../components/Shelves';
import Search from './../components/Search';

class Main extends Component {
    render() {
        return (
          <main className="app__main">
              <Nav />
              <Route
                  exact
                  path="/"
                  render={() =>
                      <Shelves />
                  }
              />
              <Route
                  path="/search/"
                  render={() =>
                      <Search />
                  }
              />
          </main>
        );
    }
}

export default Main;