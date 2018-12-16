import React, { Component } from 'react';
import classes from './Professions.module.css';
import AddNewItem from '../../AddNewItem/AddNewItem';
import Profession from '../Profession/Profession';
import Modal from '../Modal/Modal';
import firebase from '../../../firebase';

class Professions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        id: null,
        isOpen: false,
      },
      items: [],
    };

    this.removeCard = this.removeCard.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidMount() {
    this.itemsRef = firebase.database().ref('professions');
    this.itemsRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const newState = [];
      Object.keys(items || {}).forEach((item) => {
        newState.push({
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

  static getModalContent() {
    return <div>test</div>;
  }

  addItem(data) {
    const itemsRef = firebase.database().ref('professions');
    const item = {
      name: data.name,
      title: data.title,
      description: data.description,
      isFavorite: false,
    };
    itemsRef.push(item);
    this.hideModal();
  }

  showModal(id) {
    this.setState({
      modal: {
        id,
        isOpen: true,
      },
    });
  }

  hideModal() {
    this.setState({
      modal: {
        id: null,
        isOpen: false,
      },
    });
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

  render() {
    const { items, modal } = this.state;

    return (
      <div className={classes.Professions}>
        <button className={classes.NewProfessionBtn} onClick={() => this.showModal()} type="button" />
        {items.map(profession => (
          <Profession
            key={profession.id}
            id={profession.id}
            isFavorite={profession.isFavorite}
            // dribble={profession.social.dribble}
            // behance={profession.social.behance}
            img={profession.img}
            name={profession.name}
            title={profession.title}
            description={profession.description}
            // twitter={profession.social.twitter}
            isEditable
            onRemoveBtnClick={this.showModal}
            onFavoriteBtnClick={this.addToFavorite}
          />
        ))}
        { modal.isOpen && modal.id && (
          <Modal onCancel={this.hideModal}>
            <button style={{ marginBottom: 15 }} className="btn" onClick={this.removeCard} type="button">Delete</button>
            <button className="btn" onClick={this.hideModal} type="button">Cancel</button>
          </Modal>
        )}
        { modal.isOpen && !modal.id && (
          <Modal onCancel={this.hideModal}>
            <AddNewItem onSubmit={data => this.addItem(data)} />
          </Modal>
        )}
      </div>
    );
  }
}

export default Professions;
