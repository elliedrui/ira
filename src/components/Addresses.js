import React from 'react';
import {Card} from 'react-bootstrap';

const Addresses = (props) => {
  console.log('in the Addresses.js', props.addresses)

  return (

    <>
    <div class="col-sm d-flex">
    <div className='card card-body flex-fill'>
      
        <table className="App-table" id='personas-table'>
          <thead>
            <tr>
              <th> Street Name </th>
              <th> Street Number </th>
              <th> Zip Code </th>
              <th> Apartment Number </th>
              <th> Unit Type </th>
              <th> Has Interior <br/>Name </th>
              
            </tr> 
          </thead>
          
          <tbody>
          {props.addresses && props.addresses.map(address => 
            <tr>
              <td>{address ? address.street_number: null}</td>
              <td>{address ? address.street_name: null}</td>
              <td>{address ? address.zip_code: null}</td>
              <td>{address ? address.apt_number: null}</td>
              <td>{address ? address.unit_type: null}</td>
              <td>{address ? address.has_interior: null}</td>
              <td></td> 
            </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </>

  )
}

export default Addresses