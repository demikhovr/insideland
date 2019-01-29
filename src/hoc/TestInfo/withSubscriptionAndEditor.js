import React, { Component } from 'react';
import firebase from 'firebase';
import Loader from '../../components/UI/Loader/Loader';

// const testListData = [
//   {
//     id: 1, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
//   },
//   {
//     id: 2, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
//   },
//   {
//     id: 3, type: 'numeric', name: 'Тест 1', questionCount: '15', time: '22:00', isFinished: null,
//   },
//   {
//     id: 4, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: null,
//   },
//   {
//     id: 5, type: 'verbal', name: 'Тест 2', questionCount: '5', time: '15:00', isFinished: null,
//   },
//   {
//     id: 6, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
//   },
//   {
//     id: 7, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
//   },
//   {
//     id: 8, type: 'logical', name: 'Тест 1', questionCount: '24', time: '30:00', isFinished: null,
//   },
// ];

const quiz = {
  results: {}, // { [id]: 'success' 'error' }
  isFinished: false,
  activeQuestion: 0,
  answerState: null, // { [id]: 'success' 'error' }
  quiz: [
    {
      id: 1,
      question: '2 + 2 ?',
      answers: [
        { text: '125', id: 1 },
        { text: '2', id: 2 },
        { text: '3', id: 3 },
        { text: '4', id: 4 },
      ],
      rightAnswerId: 4,
    },
    {
      id: 2,
      question: 'Вопрос?',
      answers: [
        { text: 'Ответ?', id: 1 },
        { text: 'Да', id: 2 },
        { text: 'Нет', id: 3 },
        { text: 'Лопата', id: 4 },
      ],
      rightAnswerId: 2,
    },
    {
      id: 3,
      question: 'Привет?',
      answers: [
        { text: 'Да', id: 1 },
        { text: 'Нет', id: 2 },
        { text: 'Привет', id: 3 },
        { text: 'Что?', id: 4 },
      ],
      rightAnswerId: 3,
    },
    {
      id: 4,
      question: 'Какого цвета небо?',
      answers: [
        { text: 'Черный', id: 1 },
        { text: 'Синий', id: 2 },
        { text: 'Красный', id: 3 },
        { text: 'Зеленый', id: 4 },
      ],
      rightAnswerId: 2,
    },
    {
      id: 5,
      question: 'В каком году основали Санкт-Петербург?',
      answers: [
        { text: '1700', id: 1 },
        { text: '1702', id: 2 },
        { text: '1703', id: 3 },
        { text: '1803', id: 4 },
      ],
      rightAnswerId: 3,
    },
  ],
};

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
    this.itemRef = firebase.database().ref(`tests/${id}`);
    this.itemRef.on('value', (snapshot) => {
      const test = snapshot.val();
      this.setState({
        test,
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.itemRef.off();
  }

  async onAdd() {
    const { props } = this;
    const { id } = props.match.params;
    this.itemsRef = firebase.database().ref(`tests/${id}/quizes`);

    const newTest = {
      type: 'numeric', name: 'Тест 1', questionCount: '5', isFinished: null, quiz,
    };
    const { key } = await this.itemsRef.push(newTest);

    const updates = {
      [`tests/${id}/quizes/${key}`]: newTest,
      [`quizes/${key}`]: newTest,
    };

    firebase.database().ref().update(updates);
  }

  onRemove(testId) {
    const { props } = this;
    const { id } = props.match.params;
    firebase.database().ref(`tests/${id}/quizes/${testId}`).remove();
    firebase.database().ref(`quizes/${testId}`).remove();
  }

  render() {
    const { state, props } = this;

    const editor = {
      isEditable: true,
      onRemove: id => this.onRemove(id),
      onAddToFavorites: this.addToFavorite,
      onEdit: test => this.showModal(test, 'edit'),
      onAdd: () => this.onAdd(),
    };

    const { id } = props.match.params;

    return state.isLoading
      ? <Loader />
      : <WrappedComponent data={state.test} location={props.location} editor={editor} id={id} />;
  }
};

export default withSubscription;
