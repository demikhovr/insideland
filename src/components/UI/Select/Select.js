/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Select.module.scss';

const Select = ({
  label, value, onChange, options,
}) => {
  const htmlFor = `${label}-${Math.random()}`;
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <select
        id={htmlFor}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => {
          const key = option.value + index;
          return (
            <option
              key={key}
              value={option.value}
            >
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.defaultProps = {
  label: '',
  value: 1,
  onChange: () => { },
  options: [],
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
};

export default Select;
