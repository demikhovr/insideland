import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Constructor.module.scss';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import TestList from '../../components/TestList/TestList';
import TestInfo from '../../components/TestInfo/TestInfo';
import testListwithSubscriptionAndEditor from '../../hoc/TestList/withSubscriptionAndEditor';
import testInfoWithSubscriptionAndEditor from '../../hoc/TestInfo/withSubscriptionAndEditor';
import Quiz from '../Quiz/Quiz';

const links = [
  { to: '/constructor/tests/', label: 'Тесты', exact: false },
];

const TestListWithSubscriptionAndEditor = testListwithSubscriptionAndEditor(TestList);
const WithSubscriptionAndEditor = testInfoWithSubscriptionAndEditor(TestInfo);

const content = ({ location }) => (
  <div className={classes.ConstructorContentWrapper}>
    <div className={classes.ConstructorContent}>
      <Switch location={location}>
        <Route path="/constructor/tests/:id/:id" component={Quiz} />
        <Route path="/constructor/tests/:id/" component={WithSubscriptionAndEditor} />
        <Route path="/constructor/tests/" component={TestListWithSubscriptionAndEditor} />
      </Switch>
    </div>
  </div>
);

const Content = withRouter(content);

const Constructor = () => (
  <div className={classes.Constructor}>
    <InnerNavigation links={links} />
    <Content />
  </div>
);

content.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Constructor;
