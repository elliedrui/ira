import React from 'react'
import { Redirect } from 'react-router-dom'
import GunsContainer from '../containers/GunsContainer';
import {Card} from 'react-bootstrap';

const Persona = (props) => {

  console.log('in persona', props)
  
    let persona = props.personas[props.match.params.id - 1]
    return (
      <>
        {persona ? null :<Redirect to='/personas'/> }
        <h2>{persona ? persona.attributes.first_name: null} {persona ? persona.attributes.last_name: null}</h2>
        
        <table className="App" id='personas-table'>
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
            <tr>
              <td>-------</td>
              <td>--------------</td>
              <td>-------</td>
              <td>--------------</td>
              <td>--------------</td>
              <td>-----------</td>
              <td>-----------</td>
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

        <Card className="mx-auto" style={{ width: '700px' }}>
          <GunsContainer persona={persona}/>
        </Card>
      </>
    )
  
}

export default Persona

