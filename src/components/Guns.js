import React from 'react';


const Guns = (props) => {
  console.log('in the Guns.js', props.guns)

  return (

    <>
    <div class="col-sm d-flex">
      <div className='card card-body flex-fill'>
        <table className="App-table" id='guns-table'>
          <thead>
            <tr>
              <th> ID </th>
              <th> Model </th>
              <th> Description </th>
              <th> Serial Number </th>
            </tr> 
          </thead>
            
          <tbody>
          {props.guns && props.guns.map(gun => 
            <tr>
              <td>{gun ? gun.id: null}</td>
              <td>{gun ? gun.model: null}</td>
              <td style={{width: "15%"}}>{gun ? gun.description: null}</td>
              <td>{gun ? gun.serial_number: null}</td>
              <td></td> 
            </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    </>

    // <>
    //   <div class="col-sm d-flex">
    //     <div className='card card-body flex-fill'>
    //       <li><h6>ID -  Model -    Description  -  Serial -Number</h6></li>
    //       {props.guns && props.guns.map(gun => 
    //         <li key={gun.id}>
    //           {gun.id} - {gun.model} - {gun.description} - {gun.serial_number}
    //         </li>
    //         )}
          
    //       <br/>
    //     </div>
    //     </div>
    // </>

  )
}

export default Guns