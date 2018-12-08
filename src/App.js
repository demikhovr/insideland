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
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Main} />
          <Route path={`${process.env.PUBLIC_URL}/catalog`} component={Catalog} />
          <Route path={`${process.env.PUBLIC_URL}/vacancies`} component={Vacancies} />
          <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
          <Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn} />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
