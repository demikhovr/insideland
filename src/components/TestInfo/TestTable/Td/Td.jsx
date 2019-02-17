import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Td.module.scss';

const Td = ({
  children,
  to,
  location,
  id,
}) => {
  const content = to ? (
    <NavLink
      className={classes.Td}
      to={{
        pathname: to,
        state: { from: location, testId: id },
      }}
    >
      {children}
    </NavLink>
  ) : children;

  return (
    <td>
      {content}
    </td>
  );
};

Td.defaultProps = {
  to: null,
  children: [],
  location: {},
  id: '',
};

Td.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  location: PropTypes.instanceOf(Object),
  id: PropTypes.string,
};

export default Td;
