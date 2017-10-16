import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDjhVJdmcD8WXZ-VDhbX3sAA6tkrHTjqk0",
    authDomain: "bawdy-rebels.firebaseapp.com",
    databaseURL: "https://bawdy-rebels.firebaseio.com",
    projectId: "bawdy-rebels",
});
const base = Rebase.createClass(app.database());

export default base;