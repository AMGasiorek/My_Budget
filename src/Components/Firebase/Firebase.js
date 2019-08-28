import app from 'firebase/app';
import 'firebase/auth';

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

}


export default Firebase;


