/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const isInvalid = ({ valid, touched, shouldValidate }) => !valid && shouldValidate && touched;

const Input = ({
  type, label, spellCheck, value, onChange, errorMessage, valid, touched, shouldValidate,
}) => {
  const cls = [classes.Input];
  const htmlFor = `${type}-${Math.random()}`;

  if (isInvalid({ valid, touched, shouldValidate })) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        spellCheck={spellCheck}
        value={value}
        onChange={onChange}
      />
      {isInvalid({ valid, touched, shouldValidate })
        ? <span>{errorMessage}</span>
        : null}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  label: '',
  spellCheck: false,
  value: '',
  onChange: () => { },
  errorMessage: 'Введите верное значение',
  valid: true,
  touched: false,
  shouldValidate: false,
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  spellCheck: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  shouldValidate: PropTypes.bool,
};

export default Input;
