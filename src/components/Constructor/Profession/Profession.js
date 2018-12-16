import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profession.module.css';

const Profession = ({
  id, img, name, title, description, dribble, behance,
  twitter, isEditable, onRemoveBtnClick, isFavorite, onFavoriteBtnClick,
}) => (
  <div className={classes.Profession}>
    <div className={classes.ProfessionWrapper}>
      <div className={classes.ProfessionTopIcons}>
        {isEditable
        && (
          <button onClick={() => onRemoveBtnClick(id)} type="button">
            <i className="fas fa-times" />
          </button>
        )}
        <button type="button" onClick={() => onFavoriteBtnClick(id)}>
          <i className={isFavorite ? 'fa fa-heart' : 'far fa-heart'} />
        </button>
        <i className="fas fa-ellipsis-v" />
      </div>
      <div className={classes.ProfessionProfile}>
        <img src={img} className={classes.ProfessionThumbail} alt="" />
        <div className={classes.ProfessionProfileCheck}><i className="fas fa-check" /></div>
        <h3 className={classes.ProfessionProfileName}>{name}</h3>
        <p className={classes.ProfessionProfileTitle}>{title}</p>
        <p className={classes.ProfessionProfileDescription}>{description}</p>
        <button className={classes.ProfessionProfileBtn} type="button">Hire Me</button>
      </div>

      <div className={classes.ProfessionSocialIcons}>
        <div className={classes.ProfessionSocialIcon}>
          <a href="/"><i className="fab fa-dribbble" /></a>
          <h4>{dribble}</h4>
          <p>Followers</p>
        </div>

        <div className={classes.ProfessionSocialIcon}>
          <a href="/"><i className="fab fa-behance" /></a>
          <h4>{behance}</h4>
          <p>Followers</p>
        </div>

        <div className={classes.ProfessionSocialIcon}>
          <a href="/"><i className="fab fa-twitter" /></a>
          <h4>{twitter}</h4>
          <p>Followers</p>
        </div>
      </div>
    </div>
  </div>
);

Profession.defaultProps = {
  img: '',
  title: '',
  dribble: '',
  behance: '',
  twitter: '',
  isEditable: false,
};

Profession.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dribble: PropTypes.string,
  behance: PropTypes.string,
  twitter: PropTypes.string,
  isEditable: PropTypes.bool,
  onRemoveBtnClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteBtnClick: PropTypes.func.isRequired,
};

export default Profession;
