import React, { Component } from 'react';

const withCursorGradient = WrappedComponent => class WithCursorGradient extends Component {
  static onMouseMove(evt) {
    const x = evt.pageX - evt.target.offsetLeft;
    const y = evt.pageY - evt.target.offsetTop;
    evt.target.style.setProperty('--x', `${x}px`);
    evt.target.style.setProperty('--y', `${y}px`);
  }

  render() {
    return <WrappedComponent />;
  }
};

export default withCursorGradient;
