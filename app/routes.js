import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/signup' component={Signup} />
  </Route>
);