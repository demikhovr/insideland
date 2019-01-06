import React, { Component } from 'react';
import classes from './Professions.module.css';
import Profession from '../Profession/Profession';
import firebase from '../../../firebase';

class Professions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
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

  render() {
    const { items } = this.state;

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
            onRemoveBtnClick={() => this.showModal(profession, 'delete')}
            onFavoriteBtnClick={this.addToFavorite}
            onEditBtnClick={() => this.showModal(profession, 'edit')}
          />
        ))}
      </div>
    );
  }
}

export default Professions;
