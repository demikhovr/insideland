import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterWrapper}>
      <NavLink className={classes.FooterLogo} to={`${process.env.PUBLIC_URL}/`}>Инсайдия, 2018</NavLink>
      <div>
        Напишите нам:
        <a className={classes.FooterContactEmail} href="mailto:info@insideland.ru">info@insideland.ru</a>
      </div>
    </div>
  </footer>
);

export default Footer;
