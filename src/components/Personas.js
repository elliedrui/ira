import React from 'react'

const Personas = (props) => {
  console.log('in the perosna', props)
  return (
  
      <div className="App">
        <h2>Personas</h2>
        
        <table className="App" class='center' id='personas-table'>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Date of Birth </th>
            <th> Sex </th>
            <th> Race </th>
            <th> Faction </th>
          </tr>
        
          <tr>
            <td>-------</td>
            <td>--------------</td>
            <td>--------------</td>
            <td>-------</td>
            <td>--------------</td>
            <td>--------------</td>
            <td>-------</td>
          </tr>  
          
        {props.personas.map(persona => 
          <tr key={persona.id}>
            <td>{persona.id}</td>
            <td>{persona.attributes.first_name} {persona.attributes.last_name}</td>
            <td>{persona.attributes.dob}</td>
            <td>{persona.attributes.sex}</td>
            <td>{persona.attributes.race}</td>
            <td></td>
          </tr>
          )}
          </table>
      </div>
  
  )
}

export default Personas