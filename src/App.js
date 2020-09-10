import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import MembersContainer from './containers/memberContainer';
import PersonasContainer from './containers/personaContainer';
import NavBar from './components/navBar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this is IRA!
           
          </p>
        <MembersContainer />
        <PersonasContainer />
        
        </header>
      </div>
    );
  }
}

export default connect()(App);
