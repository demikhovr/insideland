import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Catalog.module.scss';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import Companies from '../../components/Companies/Companies';
import ProfessionList from '../../components/ProfessionList/ProfessionList';
import withSubscription from '../../hoc/withSubscription';
import Producers from '../../components/Producers/Producers';
import ProfessionInfo from '../ProfessionInfo/ProfessionInfo';
import Quiz from '../Quiz/Quiz';
import './animation.scss';

const links = [
  { to: '/catalog/professions/', label: 'Профессии', exact: false },
  { to: '/catalog/companies/', label: 'Компании', exact: false },
  { to: '/catalog/producers/', label: 'Производители тестов', exact: false },
];

const ProfessionListWithSubscription = withSubscription(ProfessionList);

const content = ({ location }) => (
  <div className={classes.CatalogContentWrapper}>
    <div className={classes.CatalogContent}>
      <Switch location={location}>
        <Route path="/catalog/companies/" component={Companies} />
        <Route path="/catalog/professions/:id/:id" component={Quiz} />
        <Route path="/catalog/professions/:id/" component={ProfessionInfo} />
        <Route path="/catalog/professions/" component={ProfessionListWithSubscription} />
        <Route path="/catalog/producers/" component={Producers} />
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
