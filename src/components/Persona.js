import React from 'react'

const Persona = (props) => {

  console.log('in personsa', props)
  
  if (props.match !== undefined) {
    let persona = props.personas[props.match.params.id - 1]
    return (
      <>
      <h2>{persona ? persona.attributes.first_name: null} {persona ? persona.attributes.last_name: null}</h2>
        
        <table className="App" class='center' id='personas-table'>
          <thead>
            <th> ID </th>
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
            <td>-------</td>
            <td>--------------</td>
            <td>--------------</td>
            <td>-----------</td>
            <td>-----------</td>
          </tr> 
        <td>{persona ? persona.id: null}</td>
        <td>{persona ? persona.attributes.dob: null}</td>
        <td>{persona ? persona.attributes.sex: null}</td>
        <td>{persona ? persona.attributes.race: null}</td>
        <td style={{width: "15%"}}>{persona ? persona.attributes.notes: null}</td>
        <td style={{width: "10%"}} >{persona ? persona.attributes.faction.name: null}</td>
        <td>{persona ?persona.attributes.member.name: null}</td>
        <td></td> 
        </table>
      </>
    )
  } else {
    return (
      <>
        <td>{props.persona.id}</td>
        <td>{props.persona.attributes.first_name} {props.persona.attributes.last_name}</td>
        <td>{props.persona.attributes.dob}</td>
        <td>{props.persona.attributes.sex}</td>
        <td>{props.persona.attributes.race}</td>
        <td style={{width: "10%"}}>{props.persona.attributes.notes}</td>
        <td style={{width: "10%"}} >{props.persona.attributes.faction.name}</td>
        <td>{props.persona.attributes.member.name}</td>
        <td></td> 
      </>
    )
  }

 


}

export default Persona

