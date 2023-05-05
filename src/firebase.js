// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
  collection, 
  addDoc, 
  getDoc, 
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfNDLieYpvq0VBg7L4oSYOkxtOAOIu_Kc",
  authDomain: "animeflix-73859.firebaseapp.com",
  projectId: "animeflix-73859",
  storageBucket: "animeflix-73859.appspot.com",
  messagingSenderId: "424843322229",
  appId: "1:424843322229:web:e75996f90a2ec6f0f7e93c",
  measurementId: "G-HL9MCGDZ5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export const auth = getAuth(app);

export const createAnime = ({id, portada, titulo, descripcion, video, fecha, director, duracion}) => {
  addDoc(collection(db, "animes"),{id, portada, titulo, descripcion, video, fecha, director, duracion});
}
   
export const getAnimes = () => {
  getDocs(collection(db, "animes"));
}
   
export const onGetAnimes = (callback) => 
    onSnapshot(collection(db, "animes"), callback);

/* export const deleteAnime = (id) => 
    deleteDoc(doc(db, "animes", id)); 

export const getAnime = (id) => 
    getDoc(doc(db, "animes", id));

export const updateAnime = (id, datos) => 
    updateDoc(doc(db, "animes", id), datos); */