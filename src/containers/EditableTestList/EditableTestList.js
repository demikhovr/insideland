import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import classes from './TestList.module.scss';
import TestItem from '../../components/TestList/TestItem/TestItem';
import Loader from '../../components/UI/Loader/Loader';
import {
  fetchTests,
  addTestToFavorites,
  addNewTest,
  removeTest,
  editTest,
} from '../../store/actions/catalog';
import './animation.css';
import 'rodal/lib/rodal.css';
import TestItemInfoModal from '../../components/TestList/TestItemInfoModal/TestItemInfoModal';

const renderTests = ({ tests, location, editor }) => {
  const noDataElement = <div className={classes.EmptyList}>Тесты не созданы.</div>;
  const isEditable = Object.keys(editor).length !== 0;
  return !tests.length && !isEditable
    ? noDataElement
    : (
      <TransitionGroup component={null}>
        {tests.map(({ info, quizes }) => (
          <CSSTransition key={info.id} timeout={500} classNames="move">
            <TestItem
              {...info}
              isEditable={isEditable}
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

renderTests.defaultProps = {
  editor: {},
};

renderTests.propTypes = {
  tests: PropTypes.instanceOf(Array).isRequired,
  editor: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
};

class EditableTestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isRendered: false,
        visible: false,
        data: null,
      },
    };

    this.removeTest = this.removeTest.bind(this);
    this.editTest = this.editTest.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    props.fetchTests();
  }

  showModal(id, action) {
    const { props } = this;
    const itemData = props.tests.filter(test => test.id === id);
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

  removeTest() {
    const { state, props } = this;
    const { id } = state.modal;
    props.removeTest(id);
    this.hideModal();
  }

  async addTest(data, imageFile) {
    const { props } = this;
    await props.addNewTest(data, imageFile);
    this.hideModal();
  }

  async editTest(data, imageFile) {
    const { props } = this;
    await props.editTest(data, imageFile);
    this.hideModal();
  }

  render() {
    const { props } = this;
    const { modal } = this.state;
    const editor = {
      onAddToFavorites: props.addTestToFavorites,
      onRemove: id => this.showModal(id, 'delete'),
      onEdit: id => this.showModal(id, 'edit'),
    };

    return (
      <div className={classes.Tests}>
        {props.isLoading
          ? <Loader />
          : (
            <React.Fragment>
              <button className={classes.NewTestBtn} onClick={() => this.showModal(null, 'add')} type="button" />
              {renderTests({ ...props, editor })}
            </React.Fragment>
          )}

        <Rodal
          visible={modal.visible && modal.action === 'delete'}
          width={300}
          height={65}
          closeOnEsc
          onClose={this.hideModal}
        >
          <div className={classes.DeleteModal}>
            <button className={classes.DeleteModalBtn} onClick={this.removeTest} type="button">Delete</button>
            <button className={classes.DeleteModalBtn} onClick={this.hideModal} type="button">Cancel</button>
          </div>
        </Rodal>

        {modal.isRendered && modal.action === 'add'
        && (
          <Rodal
            visible={modal.visible}
            width={300}
            height={350}
            closeOnEsc
            onClose={this.hideModal}
            onAnimationEnd={() => !modal.visible && this.setState({ modal: { isRendered: false } })}
          >
            <TestItemInfoModal
              onAddTest={(itemData, imageFile) => this.addTest(itemData, imageFile)}
            />
          </Rodal>
        )}

        {modal.isRendered && modal.action === 'edit'
        && (
          <Rodal
            visible={modal.visible}
            width={300}
            height={350}
            closeOnEsc
            onClose={this.hideModal}
            onAnimationEnd={() => !modal.visible && this.setState({ modal: { isRendered: false } })}
          >
            <TestItemInfoModal
              data={modal.data}
              onAddTest={(itemData, imageFile) => this.editTest(itemData, imageFile)}
            />
          </Rodal>
        )}
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
  addTestToFavorites: id => dispatch(addTestToFavorites(id)),
  addNewTest: test => dispatch(addNewTest(test)),
  removeTest: id => dispatch(removeTest(id)),
  editTest: test => dispatch(editTest(test)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTestList);
