/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './AnswerItem.module.scss';

const AnswerItem = ({ answer, onAnswerClick, state }) => {
  const cls = [classes.AnswerItem];

  if (state) {
    cls.push(classes[state]);
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  );
};

AnswerItem.defaultProps = {
  state: null,
};

AnswerItem.propTypes = {
  answer: PropTypes.instanceOf(Object).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.string,
};

export default AnswerItem;
