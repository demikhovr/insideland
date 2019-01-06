import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import classes from './Professions.module.css';
import AddNewItem from '../../AddNewItem/AddNewItem';
import Profession from '../Profession/Profession';
import firebase from '../../../firebase';

class Professions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isRendered: false,
        visible: false,
        id: null,
      },
      items: [],
    };

    this.removeCard = this.removeCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.editItem = this.editItem.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.itemsRef = firebase.database().ref('professions');
    this.itemsRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const newState = [];
      Object.keys(items || {}).forEach((item) => {
        newState.unshift({
          image: items[item].image,
          id: item,
          name: items[item].name,
          title: items[item].title,
          description: items[item].description,
          isFavorite: items[item].isFavorite,
        });
      });

      this.setState({
        items: newState,
      });
    });
  }

  componentWillUnmount() {
    this.itemsRef.off();
  }

  addItem(data) {
    return new Promise((resolve, reject) => {
      const itemsRef = firebase.database().ref('professions');
      const storageRef = firebase.storage().ref('professions');
      const item = {
        image: data.image ? data.image.base64 : null,
        name: data.name,
        title: data.title,
        description: data.description,
        isFavorite: false,
      };
      itemsRef.push(item);

      if (data.image) {
        const imageFile = data.image;
        const uploadTask = storageRef.child(imageFile.fileList[0].name).putString(imageFile.base64.split(',')[1], 'base64', { contentType: imageFile.fileList[0].type });
        uploadTask.then(
          () => {
            resolve();
            this.hideModal();
          },
          () => {
            reject();
            this.hideModal();
          },
        );
      } else {
        resolve();
        this.hideModal();
      }
    });
  }

  showModal(data, action) {
    this.setState({
      modal: {
        isRendered: true,
        visible: true,
        id: data.id,
        action,
        data,
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
    const itemRef = firebase.database().ref(`/professions/${modal.id}`);
    itemRef.remove();
    this.hideModal();
  }

  handleChange(evt) {
    const { newItem } = this.state;
    const item = {
      [evt.target.name]: evt.target.value,
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
    const { items } = this.state;
    const targetItem = items.filter(item => item.id === id)[0];
    const itemRef = firebase.database().ref(`/professions/${id}`);
    itemRef.update({ isFavorite: !targetItem.isFavorite });
  }

  editItem(data) {
    return new Promise(() => {
      const { state } = this;
      const itemRef = firebase.database().ref(`/professions/${state.modal.id}`);
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
    const { items, modal } = this.state;

    return (
      <div className={classes.Professions}>
        <button className={classes.NewProfessionBtn} onClick={() => this.showModal({}, 'add')} type="button" />
        {items.map(profession => (
          <Profession
            key={profession.id}
            id={profession.id}
            isFavorite={profession.isFavorite}
            image={profession.image}
            name={profession.name}
            title={profession.title}
            description={profession.description}
            isEditable
            onRemoveBtnClick={() => this.showModal(profession, 'delete')}
            onFavoriteBtnClick={this.addToFavorite}
            onEditBtnClick={() => this.showModal(profession, 'edit')}
          />
        ))}
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
            <AddNewItem onAddItem={data => this.addItem(data)} />
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
            <AddNewItem data={modal.data} onAddItem={data => this.editItem(data)} />
          </Rodal>
        )}
      </div>
    );
  }
}

export default Professions;
