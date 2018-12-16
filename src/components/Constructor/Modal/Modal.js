import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = ({ onCancel, children }) => (
  <section className={classes.BackDrop}>
    <div className={classes.Modal}>
      {children}
      <button className={classes.ModalCloseBtn} type="button" onClick={onCancel} />
    </div>
  </section>
);

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
