import * as firebase from 'firebase';
import firebaseConfig from './firebase.json'

export function initializeFirebase() {
    if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
        throw new error ('Add your own firebaseconfig in the utils folder');
    }
    firebase.initializeApp(firebaseConfig);
}