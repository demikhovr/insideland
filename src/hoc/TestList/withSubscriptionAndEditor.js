import React, { Component } from 'react';
import firebase from 'firebase';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import classes from '../../components/TestList/TestList.module.scss';
import EditItemModal from '../../components/TestList/EditItemModal/EditItemModal';
import Loader from '../../components/UI/Loader/Loader';

const withSubscriptionAndEditor = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modal: {
        isRendered: false,
        visible: false,
        id: null,
        data: null,
      },
      data: [],
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
      const newState = Object.keys(tests || {})
        .reverse()
        .map((id) => {
          const test = tests[id];
          test.info.id = id;
          return test;
        });

      this.setState({
        data: newState,
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.testsRef.off();
  }

  addItem(data) {
    return new Promise((resolve, reject) => {
      const testsRef = firebase.database().ref('tests');
      const storageRef = firebase.storage().ref('tests');
      const item = {
        info: {
          name: data.name,
          title: data.title,
          description: data.description,
          isFavorite: false,
        },
      };

      if (data.image) {
        const imageFile = data.image;
        const uploadTask = storageRef.child(imageFile.fileList[0].name).put(imageFile.fileList[0]);
        uploadTask.then(
          (snapshot) => {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
              item.info.image = downloadURL;
              testsRef.push(item);
              this.hideModal();
            });
          },
          () => {
            reject();
            this.hideModal();
          },
        );
      } else {
        testsRef.push(item);
        resolve();
        this.hideModal();
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

  addToFavorite(id) {
    const { data } = this.state;
    const targetItem = data.filter(({ info }) => info.id === id)[0];
    const itemRef = firebase.database().ref(`/tests/${id}/info`);
    itemRef.update({
      isFavorite: !targetItem.info.isFavorite,
    });
  }

  editItem(data) {
    return new Promise(() => {
      const { state } = this;
      const itemRef = firebase.database().ref(`/tests/${state.modal.id}/info`);
      itemRef.update({
        ...data,
        image: data.image ? data.image.base64 : null,
      })
        .then(() => {
          this.hideModal();
        });
    });
  }

  render() {
    const { isLoading, data, modal } = this.state;
    const edit = {
      isEditable: true,
      onRemove: test => this.showModal(test, 'delete'),
      onAddToFavorites: this.addToFavorite,
      onEdit: test => this.showModal(test, 'edit'),
    };

    return (
      <div className={classes.Tests}>
        {isLoading
          ? <Loader />
          : (
            <React.Fragment>
              <button className={classes.NewTestBtn} onClick={() => this.showModal(null, 'add')} type="button" />
              <WrappedComponent data={data} editor={edit} />
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
            <EditItemModal onAddItem={itemData => this.addItem(itemData)} />
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
            <EditItemModal data={modal.data} onAddItem={itemData => this.editItem(itemData)} />
          </Rodal>
        )}
      </div>
    );
  }
};

export default withSubscriptionAndEditor;
