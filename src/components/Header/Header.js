import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className={classes.Header}>
    <NavLink className={classes.HeaderLogo} to="/">Инсайдия</NavLink>
    <Navigation />
  </header>
);

export default Header;
