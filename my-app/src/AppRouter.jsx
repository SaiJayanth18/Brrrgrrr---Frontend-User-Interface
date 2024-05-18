import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Stan from './components/Stan';
import Cus from './components/Cus';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/standard" component={Stan} />
        <Route path="/customize" component={Cus} />
      </Switch>
    </Router>
  );
}

export default AppRouter;