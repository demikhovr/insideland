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
    <button className={classes.UserNavBtn} type="button" onClick={user ? onLogOut : onLogIn}>{user ? 'Выйти' : 'Войти'}</button>
  </div>
);

UserNav.defaultProps = {
  user: null,
};

UserNav.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default UserNav;
