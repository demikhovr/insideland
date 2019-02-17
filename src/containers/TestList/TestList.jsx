import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import classes from './TestList.module.scss';
import TestItem from '../../components/TestList/TestItem/TestItem';
import Loader from '../../components/UI/Loader/Loader';
import { fetchTests } from '../../store/actions/catalog-actions';
import './animation.css';

const renderTests = ({ tests, location }) => (!tests.length
  ? <div className={classes.EmptyList}>Тесты не созданы.</div>
  : (
    <TransitionGroup component={null}>
      {tests.map(({ info, quizes }) => (
        <CSSTransition key={info.id} timeout={500} classNames="move">
          <TestItem
            {...info}
            quizes={quizes}
            location={location}
          />
        </CSSTransition>))}
    </TransitionGroup>
  ));

renderTests.propTypes = {
  tests: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

class TestList extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchTests();
  }

  render() {
    const { props } = this;

    return (
      <div className={classes.Tests}>
        {props.isLoading
          ? <Loader />
          : renderTests(props)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tests: state.catalog.tests,
  isLoading: state.catalog.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchTests: () => dispatch(fetchTests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestList);
