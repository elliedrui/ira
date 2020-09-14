import React from 'react';
import Persona from './Persona';
import {Card} from 'react-bootstrap';

const Personas = (props) => {
  console.log('in the personas.js', props)
  return (

      <>
        
        <h2>Personas</h2>
        
        <table className="App" class='center' id='personas-table'>
          <thead>
            <th> ID </th>
            <th> Name </th>
            <th> Date of Birth </th>
            <th> Sex </th>
            <th> Race </th>
            <th> Notes </th>
            <th> Faction <br/>Name </th>
            <th> Member  <br/>Name </th>
          </thead>
        
          <tr>
            <td>-------</td>
            <td>--------------</td>
            <td>--------------</td>
            <td>-------</td>
            <td>--------------</td>
            <td>--------------</td>
            <td>-----------</td>
            <td>-----------</td>
          </tr>  
          
        {props.personas.map(persona => 
          <tr key={persona.id}><Persona persona={persona}/>
          
          </tr>
          )}
          </table>
         
      </>

  )
};

export default Personas