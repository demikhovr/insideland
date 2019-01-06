import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Catalog.module.css';
import Navigation from '../../components/Catalog/Navigation/Navigation';
import Companies from '../../components/Catalog/Companies/Companies';
import Professions from '../../components/Catalog/Professions/Professions';
import Producers from '../../components/Catalog/Producers/Producers';
import './animation.css';

const content = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={currentKey}
        timeout={300}
        classNames="fade"
      >
        <section className="route-section">
          <div className={classes.CatalogContent}>
            <Switch location={location}>
              <Route path={`${process.env.PUBLIC_URL}/catalog/companies`} component={Companies} />
              <Route path={`${process.env.PUBLIC_URL}/catalog/professions`} component={Professions} />
              <Route path={`${process.env.PUBLIC_URL}/catalog/producers`} component={Producers} />
            </Switch>
          </div>
        </section>
      </CSSTransition>
    </TransitionGroup>);
};

const Content = withRouter(content);

class Catalog extends Component {
  render() {
    return (
      <div className={classes.Catalog}>
        <Navigation />
        <Content />
      </div>
    );
  }
}

content.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Catalog;
