import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from './state';
import Home from './pages/home/home';
import Chat from './pages/chat/chat';
import './App.scss';


interface State {

}

interface Props {

}

class App extends Component<State, Props> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState): any => {
  return {};
};

export default connect(mapStateToProps)(App);
