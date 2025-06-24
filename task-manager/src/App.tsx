import React from 'react';
import './App.css';
import {Header} from "./layouts/HeaderAndFooter/Header"
import {Footer} from "./layouts/HeaderAndFooter/Footer"
export const App = () =>{
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header/>
      <div className='flex-grow-1'></div>
      <Footer/>
    </div>
  );
}

