import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css'
import DevPage from './pages/DevPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footers, Headers, Home, MobileHeader } from './pages';

function App() {
  
  return (
    <Fragment>
      
      <section className='container_main'>
        <MobileHeader />
        <Headers />
        <Router>
          <Switch>
            <Route path='/test' component={DevPage} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
        <Footers />
      </section>
    </Fragment>
  );
}

export default App;
