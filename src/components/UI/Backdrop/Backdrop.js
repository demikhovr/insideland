/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => <div className={classes.Backdrop} onClick={onClick} />;

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
