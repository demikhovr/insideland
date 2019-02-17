import React from 'react';
import PropTypes from 'prop-types';
import classes from './Timer.module.scss';

const Timer = ({ time }) => <div className={classes.Timer}>{ time }</div>;

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Timer;
