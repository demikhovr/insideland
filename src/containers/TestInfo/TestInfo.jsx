import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/UI/Loader/Loader';
import classes from './TestInfo.module.scss';
import TestTable from '../../components/TestInfo/TestTable/TestTable';
import TestStats from '../../components/TestInfo/TestStats/TestStats';
import { fetchQuizes } from '../../store/actions/quiz-actions';

class TestInfo extends Component {
  async componentDidMount() {
    const { props } = this;
    const { id } = props.match.params;
    props.fetchQuizes(id);
  }

  render() {
    const { props } = this;
    const { id } = props.match.params;
    return props.isLoading || !props.info
      ? <Loader />
      : (
        <div className={classes.TestInfo}>
          <TestTable
            quizes={props.quizes}
            location={props.location}
            id={id}
          />
          <TestStats
            {...props.info}
            quizes={props.quizes}
            location={props.location}
          />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TestInfo);
