import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profession.module.css';

const Profession = ({
  img, name, title, description, dribble, behance, twitter,
}) => (
  <div className={classes.Profession}>
    <div className={classes.ProfessionWrapper}>
      <div className={classes.ProfessionTopIcons}>
        <i className="fas fa-long-arrow-alt-left" />
        <i className="fas fa-ellipsis-v" />
        <i className="far fa-heart" />
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

Profession.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dribble: PropTypes.string.isRequired,
  behance: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Profession;
