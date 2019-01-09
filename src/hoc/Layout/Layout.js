import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <main className={classes.LayoutMain}>
      { children }
    </main>
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
