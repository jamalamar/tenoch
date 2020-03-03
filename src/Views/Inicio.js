import React from 'react';
import { Link } from 'react-router-dom';

import { MDBJumbotron,
         MDBContainer, 
         MDBBtn, 
         MDBRow, 
         MDBCol, 
         MDBCardTitle, 
         MDBIcon, 
         MDBMask, 
         MDBView } from "mdbreact";


function Inicio () {
  return (      
    <div style={style.div}>
      <h1>Inicio</h1>

    </div>
  );
}

const style = {
  div:{
    backgroundColor: '#444',
    height: '2000px'
  },

}



export default Inicio;