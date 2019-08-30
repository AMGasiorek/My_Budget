import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';


const SignUpPage = () => (
    <div className="signForms--container">
        <h1>zarejestruj</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
};


class SignUpFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {

        const { username, email, passwordOne, isAdmin } = this.state;
        const roles = {};
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles,
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            // isAdmin,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit} className="signForms">
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />


                {/*Możliwość zarejestrowania się jako admin*/}

                {/*<label>*/}
                {/*    Admin:*/}
                {/*    <input*/}
                {/*        name="isAdmin"*/}
                {/*        type="checkbox"*/}
                {/*        checked={isAdmin}*/}
                {/*        onChange={this.onChangeCheckbox}*/}
                {/*    />*/}
                {/*</label>*/}


                <button disabled={isInvalid} type="submit">zarejestruj</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

const SignUpLink = () => (
    <p className="signLinks">
        Nie masz jeszcze swojego profilu? <Link to={ROUTES.SIGN_UP}>zarejestruj</Link>
    </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };