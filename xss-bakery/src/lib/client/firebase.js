import { memoize } from 'lodash';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// ... Firebase Config ...
const firebaseConfig = {
    apiKey: "AIzaSyApZmOkPxbZIOl-PgvzcEq91o2sh4YQ7DM",
    authDomain: "xss-bakery.firebaseapp.com",
    databaseURL: "https://xss-bakery-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xss-bakery",
    storageBucket: "xss-bakery.appspot.com",
    messagingSenderId: "1029864662385",
    appId: "1:1029864662385:web:7d9c425c29db69fd0a82d0",
    measurementId: "G-C7N4J2JBZV"
};
// Initialize Firebase
export const initFirebase = memoize(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    return { app, analytics, auth }
})