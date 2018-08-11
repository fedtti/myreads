import React from 'react';
import { Link, Route } from 'react-router-dom';

function Nav(props) {
        return (
            <nav className="app__main__nav">
                <Route
                    exact
                    path="/"
                    render={() =>
                        <ul className="app__main__nav__ul">
                            <li className="app__main__nav__ul__li">Home</li>
                        </ul>
                    }
                />
                <Route
                    path="/search/"
                    render={() =>
                        <ul className="app__main__nav__ul">
                            <li className="app__main__nav__ul__li"><Link className="app__main__nav__ul__li__a" to="/">Home</Link></li>
                            <li className="app__main__nav__ul__li">Search</li>
                        </ul>
                    }
                />
            </nav>
        );
}

export default Nav;