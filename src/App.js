import React, { Component } from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import Catalog from './containers/Catalog/Catalog';
import Vacancies from './containers/Vacancies/Vacancies';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/vacancies" component={Vacancies} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
