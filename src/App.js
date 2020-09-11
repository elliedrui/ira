import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import MembersContainer from './containers/MembersContainer';
import PersonasContainer from './containers/PersonasContainer';
// import NavBar from './components/navBar'

class App extends React.Component {

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              this is IRA!      
            </p>
          </header>
        </div>
          <div>  
            <MembersContainer />
            <PersonasContainer />
          </div>
      </>
    );
  }
}

export default connect()(App);
