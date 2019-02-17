import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => (
  <div
    role="presentation"
    className={classes.Backdrop}
    onClick={onClick}
    onKeyDown={() => {}}
  />
);

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
