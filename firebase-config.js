import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig={
 apiKey:"AIzaSyBf0mwsWH3x-6zssLeUpb8xyNGK80dZ17c",
 authDomain:"ceylon-trend-mart.firebaseapp.com",
 projectId:"ceylon-trend-mart",
 storageBucket:"ceylon-trend-mart.firebasestorage.app",
 messagingSenderId:"138243699637",
 appId:"1:138243699637:web:b47a3bcf37d0b5cac39ffc"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);