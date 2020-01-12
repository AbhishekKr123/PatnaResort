import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './components/NavBar';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms/">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slig">
          <SingleRoom />
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
}

export default App;
