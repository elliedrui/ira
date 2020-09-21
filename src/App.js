import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './components/NavBar'
// import MembersContainer from './containers/MembersContainer';
import PersonasContainer from './containers/PersonasContainer';
import Sidebar from './components/SideBar';
import Home from './components/Home'


class App extends React.Component {

  render() {
    return (
      <div className='mx-auto d-block'>     
          <div className="App"> 
            <NavigationBar /><br/>
            <Sidebar />
            {/* <MembersContainer /><br/> */}
            
              <PersonasContainer /><br/>
              <Home/>
            
          </div>
      </div>
    );
  }
}

export default connect()(App);
