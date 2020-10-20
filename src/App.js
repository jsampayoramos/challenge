import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall, faTimes, faPen } from '@fortawesome/free-solid-svg-icons'

import Layout from './Layout/Layout';
import Homepage from './Pages/Homepage/Main/Homepage';
import NewEmployee from './Pages/NewEmployee/NewEmployee';
import Team from './Pages/Team/Team'

library.add(fab, faFacebookF, faTwitter, faBasketballBall, faLinkedinIn, faTimes, faPen);

const app = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path='/newEmployee' component={NewEmployee} />
        <Route path='/employees' component={Team} />
        <Route path='/' component={Homepage} />
      </Switch>      
    </Layout>
  );
};

export default app;
