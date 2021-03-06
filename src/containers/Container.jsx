import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../hoc/Layout/Layout';
import Catalog from '../components/Catalog/Catalog';
import Constructor from '../components/Constructor/Constructor';

const Container = ({ user }) => (
  <Layout>
    {user
      ? (
        <Switch>
          <Redirect from="/catalog" exact to="/catalog/tests/" />
          <Route path="/catalog/" component={Catalog} />
          <Redirect from="/constructor" exact to="/constructor/tests/" />
          <Route path="/constructor" component={Constructor} />
          <Redirect to="/catalog" />
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
