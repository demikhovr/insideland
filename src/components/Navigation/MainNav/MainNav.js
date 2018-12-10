import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

const links = [
  { to: `${process.env.PUBLIC_URL}/`, label: 'Главная', exact: true },
  { to: `${process.env.PUBLIC_URL}/catalog/`, label: 'Каталог', exact: false },
  { to: `${process.env.PUBLIC_URL}/constructor/`, label: 'Конструктор', exact: false },
];

const renderLinks = () => links.map((link, index) => {
  const key = index + link;

  return (
    <li
      key={key}
      className={classes.MainNavItem}
    >
      <NavLink
        to={link.to}
        exact={link.exact}
        className={classes.MainNavItemLink}
        activeClassName={classes.MainNavItemLinkActive}
      >
        {link.label}
      </NavLink>
    </li>
  );
});

const MainNav = () => (
  <ul className={classes.MainNav}>
    {renderLinks()}
  </ul>
);

export default MainNav;
