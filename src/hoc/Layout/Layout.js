import React, { Component } from 'react';
import classes from './Layout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  render() {
    const { props } = this;

    return (
      <div className={classes.Layout}>
        <Header />
        <main className={classes.LayoutMain}>
          { props.children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
