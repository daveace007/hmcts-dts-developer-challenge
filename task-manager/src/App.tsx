import React from 'react';
import './App.css';
import { Header } from "./layouts/HeaderAndFooter/Header"
import { Footer } from "./layouts/HeaderAndFooter/Footer"
import { TasksPage } from './layouts/TasksPage/TasksPage';
import { TaskPage } from './layouts/TaskPage/TaskPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-transparent'>
        <Header />
      <div className="flex-grow-1 d-flex flex-column">
        <TasksPage />
        <TaskPage/>
      </div>
        <Footer />
    </div>
  );
}

