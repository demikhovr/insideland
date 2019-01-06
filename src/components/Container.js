import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../hoc/Layout/Layout';
import Main from '../containers/Main/Main';
import Catalog from '../containers/Catalog/Catalog';
import Constructor from '../containers/Constructor/Constructor';

const Container = ({ user }) => (
  <Layout>
    {user
      ? (
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect from="/catalog" exact to="/catalog/companies" />
          <Route path="/catalog/" component={Catalog} />
          <Redirect from="/constructor" exact to="/constructor/companies" />
          <Route path="/constructor" component={Constructor} />
        </Switch>
      ) : null}
  </Layout>
);

Container.defaultProps = {
  user: null,
};

Container.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Container);
