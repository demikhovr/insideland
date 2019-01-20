import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../hoc/Layout/Layout';
import Main from './Main/Main';
import Catalog from './Catalog/Catalog';
import Constructor from './Constructor/Constructor';

const Container = ({ user }) => (
  <Layout>
    {user
      ? (
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect from="/catalog" exact to="/catalog/tests/" />
          <Route path="/catalog/" component={Catalog} />
          <Redirect from="/constructor" exact to="/constructor/tests/" />
          <Route path="/constructor" component={Constructor} />
        </Switch>
      ) : null}
  </Layout>
);

Container.defaultProps = {
  user: null,
};

Container.propTypes = {
  user: PropTypes.instanceOf(Object),
};

export default withRouter(Container);
