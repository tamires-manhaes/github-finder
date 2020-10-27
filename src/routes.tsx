import React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;