import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect, Route, Switch, withRouter,
} from 'react-router-dom';
import classes from './Catalog.module.scss';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import TestList from '../../components/TestList/TestList';
import TestInfo from '../../components/TestList/TestInfo/TestInfo';
import testListWithSubscription from '../../hoc/TestList/withSubscription';
import testInfoWithSubscription from '../../hoc/TestInfo/withSubscription';
import Quiz from '../Quiz/Quiz';

const links = [
  { to: '/catalog/tests/', label: 'Тесты', exact: false },
];

const TestListWithSubscription = testListWithSubscription(TestList);
const TestInfoWithSubscription = testInfoWithSubscription(TestInfo);

const content = ({ location }) => (
  <div className={classes.CatalogContentWrapper}>
    <div className={classes.CatalogContent}>
      <Switch location={location}>
        {location.state
          ? <Route path="/catalog/tests/:id/:id" component={Quiz} />
          : <Redirect from="/catalog/tests/:id/:id" exact to="/constructor/tests/" />
        }
        <Route path="/catalog/tests/:id/" component={TestInfoWithSubscription} />
        <Route path="/catalog/tests/" component={TestListWithSubscription} />
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
  location: PropTypes.shape().isRequired,
};

export default Catalog;
