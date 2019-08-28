import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li className="menu--element"><NavLink exact to="/" className="NavLink" activeClassName="Active">start</NavLink></li>
                <li className="menu--element"><NavLink to="/about-app" className="NavLink" activeClassName="Active">o aplikacji</NavLink></li>
            </ul>
        )
    }
}

export default Menu