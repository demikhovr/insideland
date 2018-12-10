import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Constructor.module.css';
import Navigation from '../../components/Constructor/Navigation/Navigation';
import Companies from '../../components/Constructor/Companies/Companies';
import Professions from '../../components/Constructor/Professions/Professions';
import Producers from '../../components/Constructor/Producers/Producers';
import './animation.css';

const state = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
    name: 'Beverly Little',
    title: 'JAVASCRIPT DEVELOPER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
    tests: {
      available: 25,
      passed: 5,
      all: 30,
    },
    social: {
      dribble: '12.8k',
      behance: '12.8k',
      twitter: '12.8k',
    },
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
    name: 'Beverly Little',
    title: 'JAVASCRIPT DEVELOPER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
    tests: {
      available: 25,
      passed: 5,
      all: 30,
    },
    social: {
      dribble: '12.8k',
      behance: '12.8k',
      twitter: '12.8k',
    },
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
    name: 'Beverly Little',
    title: 'JAVASCRIPT DEVELOPER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
    tests: {
      available: 25,
      passed: 5,
      all: 30,
    },
    social: {
      dribble: '12.8k',
      behance: '12.8k',
      twitter: '12.8k',
    },
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
    name: 'Beverly Little',
    title: 'JAVASCRIPT DEVELOPER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
    tests: {
      available: 25,
      passed: 5,
      all: 30,
    },
    social: {
      dribble: '12.8k',
      behance: '12.8k',
      twitter: '12.8k',
    },
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
    name: 'Beverly Little',
    title: 'JAVASCRIPT DEVELOPER',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
    tests: {
      available: 25,
      passed: 5,
      all: 30,
    },
    social: {
      dribble: '12.8k',
      behance: '12.8k',
      twitter: '12.8k',
    },
  },
];

const content = ({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition
      key={location.key}
      timeout={300}
      classNames="fade"
    >
      <section className="route-section">
        <div className={classes.ConstructorContent}>
          <Switch location={location}>
            <Route path={`${process.env.PUBLIC_URL}/constructor/companies`} component={Companies} />
            <Route path={`${process.env.PUBLIC_URL}/constructor/professions`} render={() => <Professions data={state} />} />
            <Route path={`${process.env.PUBLIC_URL}/constructor/producers`} component={Producers} />
          </Switch>
        </div>
      </section>
    </CSSTransition>
  </TransitionGroup>);

const Content = withRouter(content);

class Constructor extends Component {
  render() {
    return (
      <div className={classes.Constructor}>
        <Navigation />
        <Content />
      </div>
    );
  }
}

content.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default Constructor;
