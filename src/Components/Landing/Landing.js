import React, {Component} from 'react';
import SignUpPage from "../SignUp/SignUp";
import {LogoCopy} from "../Logo/Logo";

class LandingPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <LogoCopy/>
                    <h1>pomocna aplikacja dla każdego</h1>
                    <h2>trzymaj w szachu swoje finanse</h2>
                </div>
                <div className="col-4">
                    <p>załóż nowe konto</p>
                    <SignUpPage/>
                </div>
            </div>
        )
    }
}

export default LandingPage