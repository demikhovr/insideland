import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.css';

const links = [
  { to: '/', label: 'Главная', exact: true },
  { to: '/catalog/', label: 'Каталог', exact: false },
  { to: '/constructor/', label: 'Конструктор', exact: false },
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

const MainNav = ({ user }) => (
  <ul className={classes.MainNav}>
    {user && renderLinks()}
  </ul>
);

MainNav.defaultProps = {
  user: null,
};

MainNav.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default MainNav;
