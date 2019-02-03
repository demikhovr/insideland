import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import { createControl, validate, validateForm } from '../../form/formFramework';
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create';

const createOptionControl = number => createControl({
  label: `Вариант ${number}`,
  errorMessage: 'Значение не может быть пустым',
  id: number,
}, { required: true });

const createFormControls = () => ({
  question: createControl({
    label: 'Введите вопрос',
    errorMessage: 'Вопрос не может быть пустым',
  }, { required: true }),
  option1: createOptionControl(1),
  option2: createOptionControl(2),
  option3: createOptionControl(3),
  option4: createOptionControl(4),
});

class QuizCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    };

    this.selectChangeHandler = this.selectChangeHandler.bind(this);
    this.addQuestionHandler = this.addQuestionHandler.bind(this);
    this.createQuizHandler = this.createQuizHandler.bind(this);
  }

  addQuestionHandler(evt) {
    evt.preventDefault();
    const { state, props } = this;
    const {
      question, option1, option2, option3, option4,
    } = state.formControls;

    const questionItem = {
      question: question.value,
      id: props.quiz.length + 1,
      rightAnswerId: state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    props.createQuizQuestion(questionItem);

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  }

  createQuizHandler(evt) {
    evt.preventDefault();
    const { props } = this;

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });

    props.finishCreateQuiz();
    props.onAdd(props.quiz);
  }

  changeHandler(value, controlName) {
    const { state } = this;
    const formControls = { ...state.formControls };
    const control = { ...formControls[controlName] };

    control.value = value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      isFormValid: validateForm(formControls),
      formControls,
    });
  }

  selectChangeHandler(evt) {
    this.setState({
      rightAnswerId: +evt.target.value,
    });
  }

  renderControls() {
    const { state } = this;
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName];
      const key = controlName + index;
      return (
        <React.Fragment
          key={key}
        >
          <Input
            {...control}
            onChange={({ target }) => this.changeHandler(target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </React.Fragment>
      );
    });
  }

  render() {
    const { state, props } = this;

    const select = (
      <Select
        label="Выберите правильный ответ"
        value={state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={evt => evt.preventDefault()}>
            {this.renderControls()}
            {select}
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={props.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.create.quiz,
});

const mapDispatchToProps = dispatch => ({
  createQuizQuestion: item => dispatch(createQuizQuestion(item)),
  finishCreateQuiz: () => dispatch(finishCreateQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
