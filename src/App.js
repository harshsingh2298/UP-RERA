
import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardComp from './CardComp';
import DropDown from './DropDown';
import './App.css';
import { Header } from './components/Header';
import { Explore } from './components/Explore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function App() {
  return (
   <div>
    {/* <Header />   */}
    {/* <Routes> */}
    {/* <Route path="" element={<DropDown  />} />
    <Route path="" element={<CardComp />} /> */}
      <DropDown/>
      <Explore />
      <CardComp/>
    {/* </Routes> */}
    
   </div>
  );
}

export default App;
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDv1Hb4sNezyeKZ0IP9Yk1ziAqSDf7WxLs",
//   authDomain: "pivotal-pager-368414.firebaseapp.com",
//   projectId: "pivotal-pager-368414",
//   storageBucket: "pivotal-pager-368414.appspot.com",
//   messagingSenderId: "106365025879",
//   appId: "1:106365025879:web:b15f2dd51e1dfe07c26d12",
//   measurementId: "G-0T1ZXMNYDL"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);