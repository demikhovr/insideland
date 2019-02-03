import React, { Component } from 'react';
import firebase from 'firebase';
import Rodal from 'rodal';
import Loader from '../../components/UI/Loader/Loader';
import QuizCreator from '../../containers/QuizCreator/QuizCreator';

const withSubscription = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: {},
      isLoading: true,
      modal: {
        isRendered: false,
        visible: false,
        data: null,
      },
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  async onAdd(data) {
    const { props } = this;
    const { id } = props.match.params;
    this.itemsRef = firebase.database().ref(`tests/${id}/quizes`);

    const newTest = {
      type: 'numeric', name: 'Тест 1', questionCount: data.length, isFinished: null, quiz: data,
    };
    const { key } = await this.itemsRef.push(newTest);

    const updates = {
      [`tests/${id}/quizes/${key}`]: newTest,
      [`quizes/${key}`]: newTest,
    };

    firebase.database().ref().update(updates);
    this.hideModal();
  }

  onRemove(testId) {
    const { props } = this;
    const { id } = props.match.params;
    firebase.database().ref(`tests/${id}/quizes/${testId}`).remove();
    firebase.database().ref(`quizes/${testId}`).remove();
  }

  showModal(id, action) {
    // const { props } = this;
    // const itemData = props.tests.filter(test => test.id === id);
    this.setState({
      modal: {
        isRendered: true,
        visible: true,
        id,
        action,
        // data: itemData.length ? itemData[0].info : null,
      },
    });
  }

  hideModal() {
    this.setState(prevState => ({
      modal: {
        isRendered: prevState.modal.isRendered,
        visible: false,
        id: null,
        action: prevState.modal.action,
        // data: null,
      },
    }));
  }

  render() {
    const { state, props } = this;
    const { modal } = state;

    const editor = {
      isEditable: true,
      onRemove: id => this.onRemove(id),
      onAdd: quiz => this.showModal(quiz, 'add'),
    };

    const { id } = props.match.params;

    return (
      <div>
        {state.isLoading
          ? <Loader />
          : (
            <WrappedComponent
              data={state.test}
              location={props.location}
              editor={editor}
              id={id}
            />
          )}
        {modal.isRendered && modal.action === 'add'
        && (
          <Rodal
            visible={modal.visible}
            width={800}
            height={650}
            closeOnEsc
            onClose={this.hideModal}
            onAnimationEnd={() => !modal.visible && this.setState({ modal: { isRendered: false } })}
          >
            <QuizCreator
              onAdd={quiz => this.onAdd(quiz)}
            />
          </Rodal>
        )}
      </div>
    );
  }
};

export default withSubscription;
