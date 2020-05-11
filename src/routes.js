import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import Blog from './pages/blog';
import Career from './pages/career';

const Routes = () => (
  <div>
    <Route path='/' exact component={Home} />
    <Route path='/blog' component={Blog} />
    <Route path='/topics' component={Career} />
  </div>
);

export default Routes;
