import React, {Component} from 'react';
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import * as ROUTES from "../../constants/routes";


class LogoIcon extends Component {
    render() {
        return <FontAwesomeIcon icon={faWallet} className="logo--icon"/>
    }
};


const Logo = () => {
    return (
        <Link exact to={ROUTES.LANDING}>
            <div className="logo">
                <LogoIcon />
                <div className="logo__textContainer">
                    <p className="logo--text">mój</p>
                    <p className="logo--text logo--text__b">budżet</p>
                </div>
            </div>
        </Link>
    )
};

const LogoCopy = () => (
    <div className="logoCopy">
        <LogoIcon />
        <div className="logo__textContainer">
            <p className="logo--text logo--text__m">mój</p>
            <p className="logo--text">budżet</p>
        </div>
    </div>
);

export default Logo;
export {LogoCopy};
