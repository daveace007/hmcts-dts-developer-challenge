import React from 'react';
import './App.css';
import { Header } from "./layouts/HeaderAndFooter/Header"
import { Footer } from "./layouts/HeaderAndFooter/Footer"
import { TasksPage } from './layouts/TasksPage/TasksPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-transparent'>
        <Header />
      <div className="flex-grow-1 d-flex flex-column">
        <TasksPage />
      </div>
        <Footer />
    </div>
  );
}

