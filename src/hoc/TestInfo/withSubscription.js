import React, { Component } from 'react';
import firebase from 'firebase';
import Loader from '../../components/UI/Loader/Loader';

const testListData = [
  {
    id: 1, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
  },
  {
    id: 2, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
  },
  {
    id: 3, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
  },
  {
    id: 4, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: null,
  },
  {
    id: 5, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: null,
  },
  {
    id: 6, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
  },
  {
    id: 7, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
  },
  {
    id: 8, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
  },
];

const withSubscription = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    this.itemsRef = firebase.database().ref(`tests/${id}`);
    this.itemsRef.on('value', (snapshot) => {
      const test = snapshot.val();

      if (test) {
        test.id = id;
        test.quizes = testListData;
        this.setState({
          test,
          isLoading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.itemsRef.off();
  }

  render() {
    const { state, props } = this;
    return state.isLoading
      ? <Loader />
      : <WrappedComponent data={state.test} location={props.location} />;
  }
};

export default withSubscription;
