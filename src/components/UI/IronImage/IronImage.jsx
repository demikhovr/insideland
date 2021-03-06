import React, { Component } from 'react';
import './IronImage.scss';

class IronImage extends Component {
  constructor(props) {
    super(props);
    this.ironImageRef = React.createRef();
    this.preloadImageRef = React.createRef();
  }

  componentDidMount() {
    const { props } = this;
    const hdLoaderImg = new window.Image();
    hdLoaderImg.src = props.srcLoaded;
    hdLoaderImg.addEventListener('load', () => {
      if (this.ironImageRef.current) {
        this.ironImageRef.current.setAttribute(
          'style',
          `background-image: url('${props.srcLoaded}')`,
        );
        this.ironImageRef.current.classList.add('iron-image-fade-in');
        this.preloadImageRef.current.style.background = 'none';
      }
    });
  }

  componentDidUpdate() {
    const { props } = this;
    const hdLoaderImg = new window.Image();
    hdLoaderImg.src = props.srcLoaded;
    hdLoaderImg.addEventListener('load', () => {
      if (this.ironImageRef.current) {
        this.ironImageRef.current.setAttribute(
          'style',
          `background-image: url('${props.srcLoaded}')`,
        );
      }
    });
  }

  render() {
    return (
      <div className="iron-image-container">
        <div
          className="iron-image-loaded"
          ref={this.ironImageRef}
        />
        <div
          className="iron-image-preload"
          ref={this.preloadImageRef}
        />
      </div>
    );
  }
}

export default IronImage;
