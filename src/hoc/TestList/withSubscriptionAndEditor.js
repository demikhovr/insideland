import React, { Component } from 'react';
import firebase from 'firebase';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import classes from '../../components/TestList/TestList.module.scss';
import TestItemInfoModal from '../../components/TestList/TestItemInfoModal/TestItemInfoModal';
import Loader from '../../components/UI/Loader/Loader';

const withSubscriptionAndEditor = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      modal: {
        isRendered: false,
        visible: false,
        data: null,
      },
    };

    this.removeCard = this.removeCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.editItem = this.editItem.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.testsRef = firebase.database().ref('tests');
    this.testsRef.on('value', (snapshot) => {
      const tests = snapshot.val();
      const data = Object.keys(tests || {})
        .reverse()
        .map((id) => {
          const test = tests[id];
          test.info.id = id;
          return test;
        });

      this.setState({
        data,
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.testsRef.off();
  }

  addItem(data, imageFile) {
    return new Promise(async (resolve, reject) => {
      const testsRef = firebase.database().ref('tests');
      const imagesStorageRef = firebase.storage().ref('tests');
      const test = {
        info: {
          ...data,
          isFavorite: false,
        },
      };

      if (imageFile) {
        const uploadTask = imagesStorageRef
          .child(imageFile.name)
          .put(imageFile);

        try {
          const snapshot = await uploadTask;
          test.info.image = await snapshot.ref.getDownloadURL();
          testsRef.push(test);
          this.hideModal();
        } catch (e) {
          this.hideModal();
          reject(e);
        }
      } else {
        testsRef.push(test);
        this.hideModal();
        resolve();
      }
    });
  }

  showModal(data, action) {
    const { state } = this;
    const itemData = state.data.filter(({ info }) => info.id === data);
    this.setState({
      modal: {
        isRendered: true,
        visible: true,
        id: data,
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
      },
    }));
  }

  removeCard(evt) {
    evt.preventDefault();
    const { modal } = this.state;
    const itemRef = firebase.database().ref(`/tests/${modal.id}`);
    itemRef.remove();
    this.hideModal();
  }

  handleChange(evt) {
    const { newItem } = this.state;
    const item = {
      info: {
        [evt.target.name]: evt.target.value,
      },
      quizes: {},
    };

    this.setState({
      newItem: {
        ...newItem,
        ...item,
      },
    });
    this.hideModal();
  }

  editItem(data, imageFile) {
    return new Promise(async (resolve, reject) => {
      const { state } = this;
      const testRef = firebase.database().ref(`/tests/${state.modal.id}`);
      const imagesStorageRef = firebase.storage().ref('tests');
      const test = state.data.filter(({ info }) => info.id === state.modal.id)[0];
      test.info = {
        ...data,
      };

      if (imageFile) {
        const uploadTask = imagesStorageRef
          .child(imageFile.name)
          .put(imageFile);

        try {
          const snapshot = await uploadTask;
          test.info.image = await snapshot.ref.getDownloadURL();
          testRef.update(test);
          this.hideModal();
          resolve();
        } catch (e) {
          this.hideModal();
          reject(e);
          console.log(e);
        }
      } else {
        testRef.update(test);
        this.hideModal();
        resolve();
      }
    });
  }

  addToFavorite(id) {
    const { data } = this.state;
    const targetItem = data.filter(({ info }) => info.id === id)[0];
    const itemRef = firebase.database().ref(`/tests/${id}/info`);
    itemRef.update({
      isFavorite: !targetItem.info.isFavorite,
    });
  }

  render() {
    const { isLoading, data, modal } = this.state;
    const editor = {
      isEditable: true,
      onAddToFavorites: this.addToFavorite,
      onRemove: test => this.showModal(test, 'delete'),
      onEdit: test => this.showModal(test, 'edit'),
    };

    return (
      <div className={classes.Tests}>
        {isLoading
          ? <Loader />
          : (
            <React.Fragment>
              <button className={classes.NewTestBtn} onClick={() => this.showModal(null, 'add')} type="button" />
              <WrappedComponent data={data} editor={editor} />
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
            <button className={classes.DeleteModalBtn} onClick={this.removeCard} type="button">Delete</button>
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
              onAddItem={(itemData, imageFile) => this.addItem(itemData, imageFile)}
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
              onAddItem={(itemData, imageFile) => this.editItem(itemData, imageFile)}
            />
          </Rodal>
        )}
      </div>
    );
  }
};

export default withSubscriptionAndEditor;
