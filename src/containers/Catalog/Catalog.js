import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Catalog.module.css';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import Companies from '../../components/Companies/Companies';
import ProfessionList from '../../components/ProfessionList/ProfessionList';
import withSubscription from '../../hoc/withSubscription';
import Producers from '../../components/Producers/Producers';
import './animation.css';

const links = [
  { to: '/catalog/companies/', label: 'Компании', exact: false },
  { to: '/catalog/professions/', label: 'Профессии', exact: false },
  { to: '/catalog/producers/', label: 'Производители тестов', exact: false },
];

const ProfessionListWithSubscription = withSubscription(ProfessionList);

const content = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={currentKey}
        timeout={300}
        classNames="fade"
      >
        <section>
          { /* <section className="route-section"> */ }
          <div className={classes.CatalogContent}>
            <Switch location={location}>
              <Route path="/catalog/companies" component={Companies} />
              <Route path="/catalog/professions" component={ProfessionListWithSubscription} />
              <Route path="/catalog/producers" component={Producers} />
            </Switch>
          </div>
        </section>
      </CSSTransition>
    </TransitionGroup>);
};

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
