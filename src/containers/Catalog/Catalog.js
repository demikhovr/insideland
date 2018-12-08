import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classes from './Catalog.module.css';
import Navigation from '../../components/Catalog/Navigation/Navigation';
import Companies from '../../components/Catalog/Companies/Companies';
import Professions from '../../components/Catalog/Professions/Professions';
import Producers from '../../components/Catalog/Producers/Producers';

class Catalog extends Component {
  render() {
    return (
      <div className={classes.Catalog}>
        <Navigation />
        <div className={classes.CatalogContent}>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/catalog/companies`} component={Companies} />
            <Route path={`${process.env.PUBLIC_URL}/catalog/professions`} component={Professions} />
            <Route path={`${process.env.PUBLIC_URL}/catalog/producers`} component={Producers} />
          </Switch>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Catalog;
