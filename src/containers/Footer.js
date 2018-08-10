import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="app__footer">
                <p className="app__footer__p">© 2018 <a className="app__footer__p__a" href="https://federicomoretti.it/" rel="noopener noreferrer">Federico Moretti</a>. Some rights reserved. Released under <a className="app__footer__p__a" href="/LICENSE" rel="license">a <abbr className="-abbr" title="Massachusetts Institute of Technology">MIT</abbr> license</a>.</p>
            </footer>
        );
    }
}

export default Footer;