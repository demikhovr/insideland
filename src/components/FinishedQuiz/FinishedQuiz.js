import React from 'react';
import PropTypes from 'prop-types';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    let counter = total;

    if (results[key] === 'success') {
      counter += 1;
    }

    return counter;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const key = quizItem + index;
          const cls = [
            'fa',
            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={key}>
              <strong>
                {index + 1}
              </strong>
              .
              &nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>
      <p>
        Правильно&nbsp;
        {successCount}
        &nbsp;из&nbsp;
        {quiz.length}
      </p>
      <div>
        <button onClick={onRetry} type="button">Повторить</button>
      </div>
    </div>
  );
};

FinishedQuiz.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
  quiz: PropTypes.instanceOf(Array).isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default FinishedQuiz;
