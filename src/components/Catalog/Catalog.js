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
import TestInfo from '../TestList/TestInfo/TestInfo';
import testInfoWithSubscription from '../../hoc/TestInfo/withSubscription';
import Quiz from '../../containers/Quiz/Quiz';

const links = [
  { to: '/catalog/tests/', label: 'Тесты', exact: false },
];

const TestInfoWithSubscription = testInfoWithSubscription(TestInfo);

const content = ({ location }) => (
  <div className={classes.CatalogContentWrapper}>
    <div className={classes.CatalogContent}>
      <Switch location={location}>
        {location.state
          ? <Route path="/catalog/tests/:id/:id" component={Quiz} />
          : <Redirect from="/catalog/tests/:id/:id" exact to="/catalog/tests/" />
        }
        <Route path="/catalog/tests/:id/" component={TestInfoWithSubscription} />
        <Route path="/catalog/tests/" component={TestList} />
      </Switch>
    </div>
  </div>);

const Content = withRouter(content);

const Catalog = () => (
  <div className={classes.Catalog}>
    <InnerNavigation links={links} />
    <Content />
  </div>
);

content.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Catalog;
