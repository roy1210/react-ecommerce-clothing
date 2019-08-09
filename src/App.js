import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  // To avoid memory leaks in JS app
  unsubscribeFromAuth = null;

  componentDidMount() {
    // user update
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        // null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  // close the subscription
  componentWillUnmount() {
    // call this so `null`
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
