import React from 'react';
import {Card} from 'react-bootstrap';

const Guns = (props) => {
  console.log('in the Guns.js', props.guns)

  return (

    <>
    <Card className="mx-auto" style={{ width: '500px' }}>
      
      Guns
      
      <br/>
    </Card>
    </>

  )
}

export default Guns