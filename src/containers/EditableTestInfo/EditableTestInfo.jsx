import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import Loader from '../../components/UI/Loader/Loader';
import classes from './EditableTestInfo.module.scss';
import TestTable from '../../components/TestInfo/TestTable/TestTable';
import TestStats from '../../components/TestInfo/TestStats/TestStats';
import { addNewQuiz, fetchQuizes, removeQuiz } from '../../store/actions/quiz-actions';
import QuizCreator from '../QuizCreator/QuizCreator';

class EditableTestInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isRendered: false,
        visible: false,
        data: null,
      },
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addQuiz = this.addQuiz.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    props.fetchQuizes(id);
  }

  onRemove(id) {
    const { props } = this;
    const { id: testId } = props.match.params;
    props.removeQuiz(testId, id);
  }

  showModal(id, action) {
    const { props } = this;
    const itemData = props.quizes.filter(test => test.id === id);
    this.setState({
      modal: {
        isRendered: true,
        visible: true,
        id,
        action,
        data: itemData.length ? itemData[0].info : null,
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
        data: null,
      },
    }));
  }

  async addQuiz(data) {
    const { props } = this;
    const { id } = props.match.params;
    await props.addNewQuiz(id, data);
    this.hideModal();
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
      <div style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
      >
        {props.isLoading || !props.info
          ? <Loader />
          : (
            <div className={classes.TestInfo}>
              <TestTable
                quizes={props.quizes}
                location={props.location}
                editor={editor}
                id={id}
              />
              <TestStats
                {...props.info}
                quizes={props.quizes}
                location={props.location}
              />
            </div>
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
              onAdd={this.addQuiz}
            />
          </Rodal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizes: state.quiz.quizes,
  info: state.quiz.info,
  isLoading: state.quiz.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuizes: id => dispatch(fetchQuizes(id)),
  addNewQuiz: (id, quiz) => dispatch(addNewQuiz(id, quiz)),
  removeQuiz: (testId, id) => dispatch(removeQuiz(testId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTestInfo);
