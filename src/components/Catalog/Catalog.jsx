import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import classes from './Catalog.module.scss';
import InnerNavigation from '../InnerNavigation/InnerNavigation';
import TestList from '../../containers/TestList/TestList';
import TestInfo from '../../containers/TestInfo/TestInfo';
import Quiz from '../../containers/Quiz/Quiz';

const links = [
  { to: '/catalog/tests/', label: 'Тесты', exact: false },
];

const Catalog = ({ location }) => (
  <div className={classes.Catalog}>
    <InnerNavigation links={links} />
    <div className={classes.CatalogContentWrapper}>
      <div className={classes.CatalogContent}>
        <Switch location={location}>
          {location.state
            ? <Route path="/catalog/tests/:id/:id" component={Quiz} />
            : <Redirect from="/catalog/tests/:id/:id" exact to="/catalog/tests/" />
          }
          <Route path="/catalog/tests/:id/" component={TestInfo} />
          <Route path="/catalog/tests/" component={TestList} />
        </Switch>
      </div>
    </div>
  </div>
);

Catalog.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Catalog);
