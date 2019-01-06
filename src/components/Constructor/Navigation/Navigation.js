import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const links = [
  { to: '/constructor/companies', label: 'Компании', exact: false },
  { to: '/constructor/professions', label: 'Профессии', exact: false },
  { to: '/constructor/producers', label: 'Производители тестов', exact: false },
];

const renderLinks = () => links.map((link, index) => {
  const key = index + link;

  return (
    <li
      key={key}
      className={classes.NavigationItem}
    >
      <NavLink
        to={link.to}
        exact={link.exact}
        className={classes.NavigationItemLink}
        activeClassName={classes.NavigationItemLinkActive}
      >
        {link.label}
      </NavLink>
    </li>
  );
});

const Navigation = () => (
  <nav className={classes.Navigation}>
    {renderLinks()}
  </nav>
);

export default Navigation;
