import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { withFirebase } from '../Firebase';


import * as ROUTES from '../../constants/routes';


import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PassworgForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';
import Demo from "../Demo/Demo";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }


    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
                <Router>
                    <header>
                        <Logo/>
                        <Navigation authUser={this.state.authUser} />
                    </header>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                        <Route path={ROUTES.HOME} component={HomePage}/>
                        <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route path={ROUTES.ADMIN} component={AdminPage}/>
                        <Route path={ROUTES.DEMO} component={Demo}/>
                    </Switch>
                </Router>
        )
    }
}


export default withFirebase(App);