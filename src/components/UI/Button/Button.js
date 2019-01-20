import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = ({
  children, onClick, disabled, type,
}) => {
  const cls = [
    classes.Button,
    classes[type],
  ];

  return (
    <button
      className={cls.join(' ')}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default Button;
