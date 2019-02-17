import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = ({ user, onLogIn, onLogOut }) => (
  <header className={classes.Header}>
    <div className={classes.HeaderInner}>
      <NavLink className={classes.HeaderLogo} to="/catalog">Инсайдия</NavLink>
      <Navigation user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
    </div>
  </header>
);

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: PropTypes.instanceOf(Object),
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default Header;
