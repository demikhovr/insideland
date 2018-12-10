import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Professions.module.css';
import Profession from '../Profession/Profession';
import Modal from '../Modal/Modal';

class Professions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        id: null,
        isOpen: false,
      },
      cards: props.data,
    };

    this.removeCard = this.removeCard.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  static getModalContent() {
    return <div>test</div>;
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

  removeCard() {
    const { cards, modal } = this.state;
    const filteredCards = cards.filter(card => card.id !== modal.id);

    this.setState({
      cards: filteredCards,
    });

    this.hideModal();
  }

  render() {
    const { cards, modal } = this.state;

    return (
      <div className={classes.Professions}>
        {cards.map((profession, index) => {
          const key = index;

          return (
            <Profession
              key={key}
              id={profession.id}
              dribble={profession.social.dribble}
              behance={profession.social.behance}
              img={profession.img}
              name={`${profession.id}. ${profession.name}`}
              title={profession.title}
              description={profession.description}
              twitter={profession.social.twitter}
              isEditable
              onRemoveBtnClick={this.showModal}
            />
          );
        })}
        { modal.isOpen
        && (
          <Modal onCancel={this.hideModal} onApprove={this.removeCard}>
            {Professions.getModalContent()}
          </Modal>
        ) }
      </div>
    );
  }
}

Professions.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Professions;
