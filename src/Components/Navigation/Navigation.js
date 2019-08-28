import React from 'react';
import {NavLink } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';



const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <ul className="menu">
        <li className="menu--element">
            <NavLink to={ROUTES.LANDING} className="NavLink" activeClassName="Active">landing</NavLink>
        </li>
        <li className="menu--element">
            <NavLink to={ROUTES.HOME} className="NavLink" activeClassName="Active">home</NavLink>
        </li>
        <li className="menu--element">
            <NavLink to={ROUTES.ACCOUNT} className="NavLink" activeClassName="Active">account</NavLink>
        </li>
        <li className="menu--element">
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul className="menu">
        <li className="menu--element">
            <NavLink to={ROUTES.LANDING} className="NavLink" activeClassName="Active">landing</NavLink>
        </li>
        <li className="menu--element">
            <NavLink to={ROUTES.DEMO} className="NavLink" activeClassName="Active">demo</NavLink>
        </li>
        <li className="menu--element">
            <NavLink to={ROUTES.SIGN_IN} className="NavLink" activeClassName="Active">sign In</NavLink>
        </li>
    </ul>
);


export default Navigation;