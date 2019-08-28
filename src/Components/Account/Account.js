import React from 'react';
import { PasswordForgetForm } from '../PasswordForget/PassworgForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';


const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

export default AccountPage;