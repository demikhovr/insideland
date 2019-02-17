import React from 'react';
import PropTypes from 'prop-types';
import classes from './TestStats.module.scss';
import IronImage from '../../UI/IronImage/IronImage';

const DEFAULT_IMAGE_SRC = 'img/default.png';

const getPassedQuizesAmount = (quizes = {}) => Object.keys(quizes)
  .filter(key => quizes[key].isPassed).length;

const getPassedPercent = (quizes) => {
  const passed = getPassedQuizesAmount(quizes);
  const amount = Object.keys(quizes).length;

  if (passed === 0 && amount === 0) {
    return 0;
  }

  return (passed / amount) * 100;
};

const TestStats = ({
  image,
  name,
  title,
  description,
  isFavorite,
  quizes,
}) => (
  <div className={classes.Test}>
    <div className={classes.TestWrapper}>
      <div className={classes.TestTopIcons}>
        <i style={{ margin: '0 auto' }} className={isFavorite ? 'fa fa-heart' : 'far fa-heart'} />
      </div>
      <div className={classes.TestProfile}>
        <IronImage srcPreload={image} srcLoaded={image || DEFAULT_IMAGE_SRC} />
        {getPassedPercent(quizes) === 100
          ? <div className={classes.TestProfileCheck}><i className="fas fa-check" /></div>
          : null}
        <h3 className={classes.TestProfileName}>{name}</h3>
        <p className={classes.TestProfileTitle}>{title}</p>
        <p className={classes.TestProfileDescription}>{description}</p>
        <p className={classes.TestPassedInfo}>
          <svg className={classes.TestPassedRange} viewBox="0 0 32 32">
            <circle className={classes.TestPassedRangeCircleOne} r="16" cx="16" cy="16" />
            <circle
              style={{
                strokeDasharray: `${getPassedPercent(quizes)} 100`,
              }}
              className={classes.TestPassedRangeCircleTwo}
              r="16"
              cx="16"
              cy="16"
            />
          </svg>
          <span className={classes.TestPassedInfoAmount}>
            {`${getPassedQuizesAmount(quizes)}/${Object.keys(quizes).length}`}
          </span>
        </p>
      </div>
    </div>
  </div>
);

TestStats.defaultProps = {
  image: '',
  title: '',
  isFavorite: false,
  quizes: [],
};

TestStats.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  quizes: PropTypes.instanceOf(Object),
};

export default TestStats;
