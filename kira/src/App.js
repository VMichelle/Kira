import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import ThemeLayout from './components/themes/theme.layout'
import Menu from './components/menu'

export default function App() {
  return (
    <div className="todo-app container mt-3">
      <Menu/>
    <Switch>
      <Route path="/themes" component={ThemeLayout} />
    </Switch>
    </div>
  );
}
