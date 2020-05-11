import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import Navigation from './components/navigation';

const App = () => (
  <Router>
    <div className='container'>
      <Navigation />
      <Switch>
        <Routes />
      </Switch>
    </div>
  </Router>
);

export default App;
