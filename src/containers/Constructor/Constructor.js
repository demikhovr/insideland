import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Constructor.module.scss';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import Companies from '../../components/Companies/Companies';
import ProfessionList from '../../components/ProfessionList/ProfessionList';
import withSubscriptionAndEditor from '../../hoc/withSubscriptionAndEditor';
import Producers from '../../components/Producers/Producers';
import ProfessionInfo from '../ProfessionInfo/ProfessionInfo';
import Quiz from '../Quiz/Quiz';
import './animation.scss';

const links = [
  { to: '/constructor/professions/', label: 'Профессии', exact: false },
  { to: '/constructor/companies/', label: 'Компании', exact: false },
  { to: '/constructor/producers/', label: 'Производители тестов', exact: false },
];

const ProfessionListWithSubscriptionAndEditor = withSubscriptionAndEditor(ProfessionList);

const content = ({ location }) => (
  <div className={classes.ConstructorContentWrapper}>
    <div className={classes.ConstructorContent}>
      <Switch location={location}>
        <Route path="/constructor/companies/" component={Companies} />
        <Route path="/constructor/professions/:id/:id" component={Quiz} />
        <Route path="/constructor/professions/:id/" component={ProfessionInfo} />
        <Route path="/constructor/professions/" component={ProfessionListWithSubscriptionAndEditor} />
        <Route path="/constructor/producers/" component={Producers} />
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
