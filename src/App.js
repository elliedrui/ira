import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
// import MembersContainer from './containers/MembersContainer';
import PersonasContainer from './containers/PersonasContainer';


class App extends React.Component {

  render() {
    return (
      <>     
          <div className="App"> 
            <NavBar /><br/>
            {/* <MembersContainer /><br/> */}
            <PersonasContainer /><br/>
          </div>
      </>
    );
  }
}

export default connect()(App);
