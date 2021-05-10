import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here i want to import the seed file
import { seedDatabase } from "../seed";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

console.log(config);

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only once)
// seedDatabase(firebase);

export { firebase, FieldValue };
