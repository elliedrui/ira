import React from 'react'
import { Redirect } from 'react-router-dom'
import GunsContainer from '../containers/GunsContainer';
import {Card} from 'react-bootstrap';
import AddressesContainer from '../containers/AddressesContainer';

const Persona = (props) => {

  console.log('in persona', props)
  // debugger
    // let persona = props.personas[props.match.params.id - 1]
    let persona = props.personas.filter(persona => persona.id === props.match.params.id)[0]
    return (
      <div class="col-sm d-flex">
      <div className='card card-body flex-fill'>
        {persona ? null :<Redirect to='/personas'/> }
        <h1>{persona ? persona.attributes.first_name: null} {persona ? persona.attributes.last_name: null}</h1>
        <div class="col-sm d-flex">
          <div className='card card-body flex-fill'>
          <table className="App-table" id='personas-table'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Date of Birth </th>
                <th> Sex </th>
                <th> Race </th>
                <th> Notes </th>
                <th> Faction <br/>Name </th>
                <th> Member  <br/>Name </th>
              </tr> 
            </thead>
            
            <tbody>
              <tr>
                <td>{persona ? persona.id: null}</td>
                <td>{persona ? persona.attributes.dob: null}</td>
                <td>{persona ? persona.attributes.sex: null}</td>
                <td>{persona ? persona.attributes.race: null}</td>
                <td style={{width: "15%"}}>{persona ? persona.attributes.notes: null}</td>
                <td style={{width: "10%"}} >{persona ? persona.attributes.faction.name: null}</td>
                <td>{persona ?persona.attributes.member.name: null}</td>
                <td></td> 
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        <>
          <GunsContainer persona={persona}/>
          <AddressesContainer persona={persona}/>
        </>
      </div>
      </div>
    )
  
}

export default Persona

