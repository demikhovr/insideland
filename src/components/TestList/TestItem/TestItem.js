import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './TestItem.module.scss';
import IronImage from '../../UI/IronImage/IronImage';

const DEFAULT_IMAGE_SRC = 'img/default.png';

const getPassedQuizesAmount = quizes => (Object.keys(quizes)
  .filter(key => quizes[key].isPassed).length);

const TestItem = ({
  id, image, name, title, description, isEditable,
  onRemoveBtnClick, onEditBtnClick, isFavorite, onFavoriteBtnClick, location, quizes,
}) => (
  <div className={classes.Test}>
    <div className={classes.TestWrapper}>
      <div className={classes.TestTopIcons}>
        {isEditable
        && (
          <button onClick={() => onRemoveBtnClick(id)} type="button">
            <i className="far fa-times-circle" />
          </button>
        )}
        <button style={{ margin: '0 auto' }} onClick={() => onFavoriteBtnClick(id)} type="button">
          <i className={isFavorite ? 'fa fa-heart' : 'far fa-heart'} />
        </button>
        {isEditable
        && (
          <button onClick={() => onEditBtnClick(id)} type="button">
            <i className="far fa-edit" />
          </button>
        )}
      </div>
      <div className={classes.TestProfile}>
        <IronImage srcPreload={image} srcLoaded={image || DEFAULT_IMAGE_SRC} />
        <div className={classes.TestProfileCheck}><i className="fas fa-check" /></div>
        <h3 className={classes.TestProfileName}>{name}</h3>
        <p className={classes.TestProfileTitle}>{title}</p>
        <p className={classes.TestProfileDescription}>{description}</p>
        <p className={classes.TestProfileDescription}>{`Пройдено ${getPassedQuizesAmount(quizes || {})} из ${Object.keys(quizes || {}).length}`}</p>
        <Link
          to={{
            pathname: `${id}/`,
            state: { from: location },
          }}
          className={classes.TestProfileBtn}
        >
          К тестам
        </Link>
      </div>
    </div>
  </div>
);

TestItem.defaultProps = {
  image: '',
  title: '',
  isEditable: false,
};

TestItem.defaultProps = {
  quizes: [],
  onRemoveBtnClick: () => {},
  onFavoriteBtnClick: () => {},
  onEditBtnClick: () => {},
};

TestItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
  isFavorite: PropTypes.bool.isRequired,
  onRemoveBtnClick: PropTypes.func,
  onFavoriteBtnClick: PropTypes.func,
  onEditBtnClick: PropTypes.func,
  location: PropTypes.instanceOf(Object).isRequired,
  quizes: PropTypes.instanceOf(Object),
};

export default TestItem;
