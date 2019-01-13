import React from 'react';
import PropTypes from 'prop-types';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul className={classes.AnswersList}>
    {answers.map((answer, index) => {
      const key = answer + index;
      return (
        <AnswerItem
          key={key}
          answer={answer}
          onAnswerClick={onAnswerClick}
          state={state ? state[answer.id] : null}
        />
      );
    })}
  </ul>
);

AnswersList.defaultProps = {
  state: null,
};

AnswersList.propTypes = {
  answers: PropTypes.instanceOf(Array).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object),
};

export default AnswersList;
