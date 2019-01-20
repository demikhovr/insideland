import React from 'react';
import PropTypes from 'prop-types';
import classes from './TestStats.module.scss';
import IronImage from '../../UI/IronImage/IronImage';

const DEFAULT_IMAGE_SRC = 'img/default.png';

const TestStats = ({
  image, name, title, description, isFavorite,
}) => (
  <div className={classes.Test}>
    <div className={classes.TestWrapper}>
      <div className={classes.TestTopIcons}>
        <i style={{ margin: '0 auto' }} className={isFavorite ? 'fa fa-heart' : 'far fa-heart'} />
      </div>
      <div className={classes.TestProfile}>
        <IronImage srcPreload={image} srcLoaded={image || DEFAULT_IMAGE_SRC} />
        <div className={classes.TestProfileCheck}><i className="fas fa-check" /></div>
        <h3 className={classes.TestProfileName}>{name}</h3>
        <p className={classes.TestProfileTitle}>{title}</p>
        <p className={classes.TestProfileDescription}>{description}</p>
      </div>
    </div>
  </div>
);

TestStats.defaultProps = {
  image: PropTypes.string,
  title: PropTypes.string,
};

TestStats.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};


export default TestStats;
