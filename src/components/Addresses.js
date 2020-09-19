import React from 'react';
import {Card} from 'react-bootstrap';

const Addresses = (props) => {
  console.log('in the Addresses.js', props.addresses)

  return (

    <>
    <Card>
      <li><h6> Addresses</h6></li>
      {props.addresses && props.addresses.map(address => 
        <li key={address.id}>
          Street number and name: {address.street_number}  {address.street_name}  Zip: {address.zip_code}  Apt No: {address.apt_number}  Unit Type:{address.unit_type}  Has Interior: {address.has_interior}
        </li>
        )}
    </Card>
    </>

  )
}

export default Addresses