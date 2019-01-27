import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import classes from './TestList.module.scss';
import TestItem from './TestItem/TestItem';
import './animation.css';

const TestList = ({ data, location, editor }) => {
  const noDataElement = <div className={classes.EmptyList}>Тесты не созданы.</div>;
  const isEditable = Object.keys(editor).length !== 0;
  return !data.length && !isEditable
    ? noDataElement
    : (
      <TransitionGroup component={null}>
        {data.map(({ info, quizes }) => (
          <CSSTransition key={info.id} timeout={500} classNames="move">
            <TestItem
              {...info}
              isEditable={editor.isEditable}
              quizes={quizes}
              onRemoveBtnClick={editor.onRemove}
              onFavoriteBtnClick={editor.onAddToFavorites}
              onEditBtnClick={editor.onEdit}
              location={location}
            />
          </CSSTransition>))}
      </TransitionGroup>
    );
};

TestList.defaultProps = {
  editor: {},
};

TestList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  editor: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(TestList);
