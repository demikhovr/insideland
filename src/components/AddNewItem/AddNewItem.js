import React, { Component } from 'react';
import classes from './AddNewItem.module.css';

class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { state, props } = this;
    props.onSubmit(state);
    this.reset();
  }

  onReset() {
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      title: '',
      description: '',
    });
  }

  render() {
    const { state } = this;

    return (
      <section className={classes.AddNewItem}>
        <form className={classes.AddNewItemForm} onSubmit={this.onSubmit}>
          <label className={classes.AddNewItemLabel} htmlFor="name">
            <input
              className={classes.AddNewItemInput}
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={this.onChange}
              placeholder="Name"
              required
            />
          </label>
          <label className={classes.AddNewItemLabel} htmlFor="title">
            <input
              className={classes.AddNewItemInput}
              type="text"
              id="title"
              name="title"
              value={state.title}
              onChange={this.onChange}
              placeholder="Title"
              required
            />
          </label>
          <label className={classes.AddNewItemLabel} htmlFor="description">
            <input
              className={classes.AddNewItemInput}
              type="text"
              id="description"
              name="description"
              value={state.description}
              onChange={this.onChange}
              placeholder="Description"
              required
            />
          </label>
          <div className={classes.AddNewItemActions}>
            <button className={classes.AddNewItemActionBtn} type="submit">Submit</button>
            <button className={classes.AddNewItemActionBtn} type="button" onClick={this.onReset}>Reset</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddNewItem;
