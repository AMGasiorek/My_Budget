import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut} className="NavLink">
        wyloguj
    </button>
);

export default withFirebase(SignOutButton);