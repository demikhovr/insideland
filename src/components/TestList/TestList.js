import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import TestItem from './TestItem/TestItem';
import './animation.css';

const TestList = ({ data, editor, location }) => (
  <TransitionGroup component={null}>
    {data.map(test => (
      <CSSTransition key={test.id} timeout={500} classNames="move">
        <TestItem
          id={test.id}
          isEditable={editor.isEditable}
          isFavorite={test.isFavorite}
          image={test.image}
          name={test.name}
          title={test.title}
          description={test.description}
          onRemoveBtnClick={editor.onRemove}
          onFavoriteBtnClick={editor.onAddToFavorites}
          onEditBtnClick={editor.onEdit}
          location={location}
        />
      </CSSTransition>))}
  </TransitionGroup>
);

TestList.defaultProps = {
  editor: {},
};

TestList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  editor: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(TestList);
