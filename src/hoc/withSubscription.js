import React, { Component } from 'react';
import firebase from 'firebase';

const withSubscription = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
        data: newState,
      });
    });
  }

  componentWillUnmount() {
    this.itemsRef.off();
  }

  render() {
    const { state, props } = this;
    return <WrappedComponent data={state.data} editor={props.editor} />;
  }
};

export default withSubscription;
