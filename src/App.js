import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall, faTimes, faPen } from '@fortawesome/free-solid-svg-icons'

import Layout from './hoc/Layout';
import Homepage from './components/Homepage/Homepage';
import NewEmployee from './containers/NewEmployee/NewEmployee';
import Team from './containers/Team/Team'

library.add(fab, faFacebookF, faTwitter, faBasketballBall, faLinkedinIn, faTimes, faPen);

class App extends Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route path='/newEmployee' component={NewEmployee} />
          <Route path='/employees' component={Team} />
          <Route path='/' exact component={Homepage} />
        </Switch>      
      </Layout>
    );
  };
};

export default App;
