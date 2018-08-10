import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="app__header">
                <Route
                    exact
                    path="/"
                    render={() =>
                        <h1 className="app__header__h1">MyReads</h1>
                    }
                />
                <Route
                    path="/search"
                    render={() =>
                        <h1 className="app__header__h1"><Link className="app__header__h1__a" to="/">MyReads</Link></h1>
                    }
                />
            </header>
        );
    }
}

export default Header;