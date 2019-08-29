import React from 'react';
import { PasswordForgetForm } from '../PasswordForget/PassworgForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session/Session';


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="row">
                <div className="col-6">
                    <h1>Account: {authUser.email}</h1>
                </div>
                <div className="col-6">
                    <div className="signForms--container">
                        <PasswordForgetForm />
                    </div>
                    <div className="signForms--container">
                        <PasswordChangeForm />
                    </div>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);