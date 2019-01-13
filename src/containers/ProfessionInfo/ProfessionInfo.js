import React, { Component } from 'react';
import firebase from 'firebase';
import classes from './ProfessionInfo.module.scss';
import TestList from '../../components/ProfessionList/TestList/TestList';
import ProfessionStats from '../../components/ProfessionList/ProfessionStats/ProfessionStats';

const testListData = [
  {
    id: 1, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: true,
  },
  {
    id: 2, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: false,
  },
  {
    id: 3, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: false,
  },
  {
    id: 4, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: false,
  },
  {
    id: 5, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: true,
  },
  {
    id: 6, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: false,
  },
  {
    id: 7, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: false,
  },
  {
    id: 8, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: false,
  },
];

class ProfessionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: testListData,
      stats: {
        id: null,
        image: null,
        title: null,
        description: null,
        successPercent: null,
      },
    };
  }

  componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    this.itemsRef = firebase.database().ref(`professions/${id}`);
    this.itemsRef.on('value', (snapshot) => {
      const item = snapshot.val();

      this.setState({
        stats: {
          id: item.id,
          image: item.image,
          name: item.name,
          title: item.title,
          description: item.description,
          successPercent: item.successPercent || 0,
        },
      });
    });
  }

  componentWillUnmount() {
    this.itemsRef.off();
  }

  render() {
    const { state } = this;

    return (
      <div className={classes.ProfessionInfo}>
        <TestList tests={state.tests} />
        <ProfessionStats stats={state.stats} tests={state.tests} />
      </div>
    );
  }
}

export default ProfessionInfo;
