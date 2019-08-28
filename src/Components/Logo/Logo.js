import React, {Component} from 'react';
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LogoIcon extends Component {
    render() {
        return <FontAwesomeIcon icon={faWallet} className="logo--icon"/>
    }
};


const Logo = () => {
    return (
        <div className="logo">
            <LogoIcon />
            <div className="logo__textContainer">
                <p className="logo--text logo--text__m">mój</p>
                <p className="logo--text">budżet</p>
            </div>
        </div>
    )
};

export default Logo