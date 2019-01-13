import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './InnerNavigation.module.scss';

const renderLinks = linksArr => linksArr.map((link, index) => {
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

const InnerNavigation = ({ links }) => (
  <nav className={classes.Navigation}>
    {renderLinks(links)}
  </nav>
);

InnerNavigation.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
};

export default InnerNavigation;
