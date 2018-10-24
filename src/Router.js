import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Loading } from './components';
import Main from './screens/Main';
import Auth from './screens/Auth';
import store from './redux/store';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: false,
      is_logged_in: false
    };
  }

  componentDidMount() {
    // if (!_.isEmpty(store.getState().Authentication)) {
    //   this.setState({ is_logged_in: true });
    // }
    // this.setState({ is_logged_in: true });
  }

  setIsLoggedIn = () => this.setState({ is_logged_in: true });

  render() {
    if (this.state.is_loading) {
      return <Loading />;
    }
    if (this.state.is_logged_in) {
      return <Main />;
    }
    return (
      <Auth
        screenProps={{
          setIsLoggedIn: this.setIsLoggedIn.bind(this)
        }}
      />
    );
  }
}

export default connect()(Router);
