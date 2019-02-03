import React, { Component } from 'react';
import Header from './components/Header/Header';
import Container from './containers/Container';
import Footer from './components/Footer/Footer';
import { auth, provider } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      }
    });
  }

  async login() {
    const result = await auth.signInWithPopup(provider);

    const { user } = result;
    this.setState({
      user,
    });
  }

  async logout() {
    await auth.signOut();
    this.setState({
      user: null,
    });
  }

  render() {
    const { state } = this;

    return (
      <div className="app">
        <Header user={state.user} onLogIn={this.login} onLogOut={this.logout} />
        <Container user={state.user} />
        <Footer />
      </div>
    );
  }
}

export default App;
