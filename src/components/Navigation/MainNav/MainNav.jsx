import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './MainNav.module.scss';

const links = [
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
  user: PropTypes.instanceOf(Object),
};

export default MainNav;
