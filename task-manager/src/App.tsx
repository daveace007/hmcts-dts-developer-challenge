import React from 'react';
import './App.css';
import { Header } from "./layouts/HeaderAndFooter/Header"
import { Footer } from "./layouts/HeaderAndFooter/Footer"
import { TasksPage } from './layouts/TasksPage/TasksPage';
import { TaskPage } from './layouts/TaskPage/TaskPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as Routes from './Routes';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-transparent'>
      <Header />
      <div className="flex-grow-1 d-flex flex-column">
        <Switch>
          <Route path='/' exact>
            <Redirect to={Routes.TASKS_PAGE} />
          </Route>
          <Route path={Routes.TASKS_PAGE} exact>
            <TasksPage />
          </Route>
          <TaskPage />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

