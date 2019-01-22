import React, { Component } from 'react';
import firebase from 'firebase';
import Loader from '../../components/UI/Loader/Loader';
import classes from '../../components/TestList/TestList.module.scss';

const withSubscription = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.testsRef = firebase.database().ref('tests');
    this.testsRef.on('value', (snapshot) => {
      const tests = snapshot.val();
      const newState = Object.keys(tests || {})
        .reverse()
        .map((id) => {
          const test = tests[id];
          test.info.id = id;
          return test;
        });

      this.setState({
        data: newState,
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.testsRef.off();
  }

  render() {
    const { state, props } = this;
    return (
      <div className={classes.Tests}>
        {state.isLoading
          ? <Loader />
          : <WrappedComponent data={state.data} editor={props.editor} />}
      </div>
    );
  }
};

export default withSubscription;
