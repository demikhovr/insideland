import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './UserNav.module.css';

const links = [
  { to: '/sign-up', label: 'Регистрация', exact: false },
  { to: '/sign-in', label: 'Войти', exact: false },
];

const renderLinks = () => links.map((link, index) => {
  const key = index + link;

  return (
    <li
      key={key}
      className={classes.UserNavItem}
    >
      <NavLink
        to={link.to}
        exact={link.exact}
        className={classes.UserNavItemLink}
        activeClassName={classes.UserNavItemLinkActive}
      >
        {link.label}
      </NavLink>
    </li>
  );
});


const UserNav = () => (
  <ul className={classes.UserNav}>
    {renderLinks()}
  </ul>
);

export default UserNav;
