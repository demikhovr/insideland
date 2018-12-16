import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ user, onLogIn, onLogOut }) => (
  <header className={classes.Header}>
    <NavLink className={classes.HeaderLogo} to={`${process.env.PUBLIC_URL}/`}>Инсайдия</NavLink>
    <Navigation user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
  </header>
);

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default Header;
