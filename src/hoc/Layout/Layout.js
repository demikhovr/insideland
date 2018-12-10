import React, { Component } from 'react';
import classes from './Layout.module.css';


class Layout extends Component {
  render() {
    const { props } = this;

    return (
      <div className={classes.Layout}>
        <main className={classes.LayoutMain}>
          { props.children }
        </main>
      </div>
    );
  }
}

export default Layout;
