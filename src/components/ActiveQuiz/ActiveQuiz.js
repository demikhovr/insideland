import React from 'react';
import PropTypes from 'prop-types';
import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = ({
  answers, question, onAnswerClick, answerNumber, quizLength, state,
}) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>
          {answerNumber}
          .
        </strong>
        &nbsp;
        {question}
      </span>
      <small>
        {answerNumber}
        &nbsp;из&nbsp;
        {quizLength}
      </small>
    </p>
    <AnswersList
      state={state}
      answers={answers}
      onAnswerClick={onAnswerClick}
    />
  </div>
);

ActiveQuiz.defaultProps = {
  state: null,
};

ActiveQuiz.propTypes = {
  answers: PropTypes.instanceOf(Object).isRequired,
  question: PropTypes.string.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  answerNumber: PropTypes.number.isRequired,
  quizLength: PropTypes.number.isRequired,
  state: PropTypes.instanceOf(Object),
};

export default ActiveQuiz;
