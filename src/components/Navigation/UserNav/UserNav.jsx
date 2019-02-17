import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserNav.module.scss';

const UserNav = ({ user, onLogIn, onLogOut }) => (
  <div className={classes.UserNav}>
    {user
      ? (
        <div className={classes.UserNavPicWrapper} title={user.displayName}>
          <img className={classes.UserNavPic} src={user.photoURL} alt={user.displayName} />
        </div>)
      : null}
    <button
      type="button"
      className={classes.UserNavBtn}
      onClick={user ? onLogOut : onLogIn}
    >
      {user ? 'Выйти' : 'Войти'}
    </button>
  </div>
);

UserNav.defaultProps = {
  user: null,
};

UserNav.propTypes = {
  user: PropTypes.instanceOf(Object),
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default UserNav;
