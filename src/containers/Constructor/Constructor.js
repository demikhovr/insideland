import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classes from './Constructor.module.css';
import InnerNavigation from '../../components/InnerNavigation/InnerNavigation';
import Companies from '../../components/Companies/Companies';
import ProfessionList from '../../components/ProfessionList/ProfessionList';
import withSubscriptionAndEditor from '../../hoc/withSubscriptionAndEditor';
import Producers from '../../components/Producers/Producers';
import './animation.css';

const links = [
  { to: '/constructor/companies/', label: 'Компании', exact: false },
  { to: '/constructor/professions/', label: 'Профессии', exact: false },
  { to: '/constructor/producers/', label: 'Производители тестов', exact: false },
];

const ProfessionListWithSubscriptionAndEditor = withSubscriptionAndEditor(ProfessionList);

const content = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames="fade"
      >
        <section>
          { /* <section className="route-section"> */ }
          <div className={classes.ConstructorContent}>
            <Switch location={location}>
              <Route path="/constructor/companies" component={Companies} />
              <Route path="/constructor/professions" component={ProfessionListWithSubscriptionAndEditor} />
              <Route path="/constructor/producers" component={Producers} />
            </Switch>
          </div>
        </section>
      </CSSTransition>
    </TransitionGroup>);
};

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
