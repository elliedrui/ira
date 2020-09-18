import React from 'react';
import {Card} from 'react-bootstrap';

const Guns = (props) => {
  console.log('in the Guns.js', props.guns)

  return (

    <>
    <Card className="mx-auto" style={{ width: '75%' }}>
      <li><h7>ID -  Model -    Description  -  Serial -Number</h7></li>
      {props.guns && props.guns.map(gun => 
        <li key={gun.id}>
          {gun.id} - {gun.model} - {gun.description} - {gun.serial_number}
        </li>
        )}
      
      <br/>
    </Card>
    </>

  )
}

export default Guns