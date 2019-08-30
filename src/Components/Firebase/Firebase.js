import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDp4TO37P2aH_vPbwjRbDnWW3FsKpssFJw",
    authDomain: "project-my-budget.firebaseapp.com",
    databaseURL: "https://project-my-budget.firebaseio.com",
    projectId: "project-my-budget",
    storageBucket: "",
    messagingSenderId: "1051899526663",
    appId: "1:1051899526663:web:be7526a8f3b9d7e7"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();

        /* Helper */
        this.serverValue = app.database.ServerValue;
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        };
                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');


    // *** Message API ***
    message = uid => this.db.ref(`messages/${uid}`);

    messages = () => this.db.ref('messages');

    // *** Income API ***
    income = uid => this.db.ref(`incomes/${uid}`);

    incomes = () => this.db.ref('incomes');

    // *** Income API ***
    expenditure = uid => this.db.ref(`expenditures/${uid}`);

    expenditures = () => this.db.ref('expenditures');

}


export default Firebase;


