import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = ({ onApprove, onCancel, children }) => (
  <section className={classes.BackDrop}>
    <div className={classes.Modal}>
      {children}
      <div className={classes.ModalFooter}>
        <button className={classes.ModalBtn} onClick={onApprove} type="button">Delete</button>
        <button className={classes.ModalBtn} onClick={onCancel} type="button">Cancel</button>
      </div>
    </div>
  </section>
);

Modal.propTypes = {
  onApprove: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
