import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "./header/Header"
import StartPage from "./main_section/StartPage";
import AboutApp from "./main_section/AboutApp";

class MainTemplate extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route path="/about-app" component={AboutApp}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default MainTemplate