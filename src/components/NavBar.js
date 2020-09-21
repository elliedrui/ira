// import React from 'react'
// import { NavLink } from 'react-router-dom';
 
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }
 
// class Navbar extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavLink
//           to="/"
//           /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//           exact
//           /* add styling to Navlink */
//           style={link}
//           /* add prop for activeStyle */
//           activeStyle={{
//             background: 'darkblue'
//           }}
//         >Home</NavLink>
//         <NavLink
//           to="/personas"
//           exact
//           style={link}
//           activeStyle={{
//             background: 'darkblue'
//           }}
//         >Personas</NavLink>
//         <NavLink
//           to="/personas/new"
//           exact
//           style={link}
//           activeStyle={{
//             background: 'darkblue'
//           }}
//         >New Persona</NavLink>
//         <NavLink
//           to="/login"
//           exact
//           style={link}
//           activeStyle={{
//             background: 'darkblue'
//           }}
//         >Login</NavLink>
//         <br/>
//       </div>
//     )
//   }
// }
 
// export default Navbar;

import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">IRA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/personas">Personas</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/personas/new">New Persona</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

