import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Another from './components/Another';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" exact>
          <Home/>
        </Route>
        <Route to="/another" exact>
          <Another/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;