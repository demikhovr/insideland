import React from 'react';
import PropTypes from 'prop-types';

const Company = ({
  img, name, title, description, dribble, behance, twitter,
}) => (
  <div className="content__wrapper">
    <div className="wrapper">
      <div className="top-icons">
        <i className="fas fa-long-arrow-alt-left" />
        <i className="fas fa-ellipsis-v" />
        <i className="far fa-heart" />
      </div>

      <div className="profile">
        <img src={img} className="thumbnail" alt="" />
        <div className="check"><i className="fas fa-check" /></div>
        <h3 className="name">{name}</h3>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <button className="btn" type="button">Hire Me</button>
      </div>

      <div className="social-icons">
        <div className="icon">
          <a href="/"><i className="fab fa-dribbble" /></a>
          <h4>{dribble}</h4>
          <p>Followers</p>
        </div>

        <div className="icon">
          <a href="/"><i className="fab fa-behance" /></a>
          <h4>{behance}</h4>
          <p>Followers</p>
        </div>

        <div className="icon">
          <a href="/"><i className="fab fa-twitter" /></a>
          <h4>{twitter}</h4>
          <p>Followers</p>
        </div>
      </div>
    </div>
  </div>
);

Company.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dribble: PropTypes.number.isRequired,
  behance: PropTypes.number.isRequired,
  twitter: PropTypes.number.isRequired,
};

export default Company;
