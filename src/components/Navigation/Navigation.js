import React from 'react';
import classes from './Navigation.module.css';
import MainNav from './MainNav/MainNav';
import UserNav from './UserNav/UserNav';

const Navigation = () => (
  <nav className={classes.Navigation}>
    <div className={classes.NavigationWrapper}>
      <MainNav />
      <UserNav />
    </div>
  </nav>
);

export default Navigation;
