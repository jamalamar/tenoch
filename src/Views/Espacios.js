import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Espacios = () => {
  return (
  	<div className="pt-5 ">
    <div className="w-responsive mx-auto" >
      
      <MDBCardBody>

      <h1 className="font-weight-bold text-center my-5">
          Conoce Nuestros Espacios
        </h1>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>

        <hr className="mb-5 mt-5" />

       <MDBRow >
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/Teotihuacan.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="h2-responsive">
                  SALÓN TEOTIHUACÁN
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
             <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>
			          <p>Espacio ideal para tener una sesión de trabajo.</p>
			          <p>Diferentes tipos de montajes.</p>
			          <p>Cuenta con TV Pantalla de 65”, WIFI, aire acondicionado, mesas, sillas ejecutivas, perchero y persianas black out.</p>
		          </td>
		          <td>
		          	<p>Imperial con capacidad para 20 personas sentadas.</p>
		          	<p>Escuela con capacidad para 12 personas sentadas.</p>
		          	<p>Auditorio con capacidad para 20 (pupitres) personas sentadas.</p>
		          	<p>Auditorio con capacidad para 35 (sillas) personas sentadas.</p>
		          </td>
		          <td>34 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        
        <hr className="mb-5 mt-4" />
        
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/Chichen.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='mx-5 w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="font-weight-bold h2-responsive">
                  SALÓN CHICHEN ITZÁ
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
             <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>
			          <p>Espacio ideal para cerrar un negocio o tener una reunión de trabajo.</p>
			          <p>Cuenta con TV Pantalla de 65”, WIFI, teléfono inalambrico, un Sofa y tres Sillones individuales, mesas laterales,  chimenea y persianas black out.</p>
			      </td>
		          <td>Sala con chimenea con capacidad para 6 personas sentadas.</td>
		          <td>17 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        
        <hr className="mb-5 mt-4" />
        
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/Coba.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='mx-5 w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="font-weight-bold h2-responsive">
                  SALA COBÁ
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
             <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>
			          <p>Espacio ideal para tener una junta de trabajo.</p>
			          <p>Cuenta con TV Pantalla de 65”, WIFI, teléfono para hablar en conferencia, mesa de cristal, sillas ejecutivas, Contadora de billetes, perchero y persianas black out.</p>
			      </td>
		          <td>Imperial con capacidad para 8 personas sentadas.</td>
		          <td>11 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
		
		<hr className="mb-5 mt-4" />
        
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/MonteAlban.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='mx-5 w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="font-weight-bold h2-responsive">
                  SALA MONTE ALBÁN
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>
			          <p>Espacio ideal para tener una sesión de trabajo.</p>
			          <p>Diferentes tipos de montajes.</p>
			          <p>Cuenta con TV Pantalla de 65”, WIFI, mesas, sillas ejecutivas, perchero y persianas black out.</p>
			      </td>
		          <td>
		          	<p>Imperial con capacidad para 8 personas sentadas.</p>
		          	<p>Herradura con capacidad para 6 personas sentadas.</p>
		          	<p>Auditorio con capacidad para 12 personas sentadas.</p>
		          </td>
		          <td>12 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        
        <hr className="mb-5 mt-4" />

        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/Bonampak.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='mx-5 w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="font-weight-bold h2-responsive">
                  AULA BONAMPAK
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
             <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>
			          <p>Espacio ideal para tener una capacitación.</p>
			          <p>Cuenta con TV Pantalla de 65”, WIFI, pupitres, perchero y persianas black out.</p>
			      </td>
		          <td>Auditorio con una capacidad de 10 pupitres.</td>
		          <td>12 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        
        <hr className="mb-5 mt-4" />

                <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="../Assets/Espacios/Tulum.jpg"
                  alt=""
                  className="img-fluid"
                  class="card-img"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
            </MDBCard>

            <MDBCard className='mx-5 w-responsive mx-auto rgba-orange-strong' style={{'marginTop': '-1.5rem'}}>
              <MDBCardBody className="text-center">
                <h4 className="font-weight-bold h2-responsive white-text">
                  TERRAZA TULÚM
                </h4>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
            <MDBTable small>
		      <MDBTableHead>
		        <tr>
		          <th><h5>Descripción</h5></th>
		          <th><h5>Formato</h5></th>
		          <th><h5>Medidas</h5></th>
		        </tr>
		      </MDBTableHead>
		      <MDBTableBody>
		        <tr>
		          <td>Espacio al aire libre para evento social o actividad recreativa.</td>
		          <td>Capacidad 15 personas.</td>
		          <td>20 m2</td>
		        </tr>
		      </MDBTableBody>
		    </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <hr className="mb-5 mt-4" />

      </MDBCardBody>
    </div>

    </div>
  );
}

const style = {
	bg: {
	  backgroundImage: 'url("../Assets/BackgroundAbstract.jpg")',
	  height: '100%',
	  backgroundAttachment: 'fixed',
	  backgroundSize: 'cover',

	}
}


export default Espacios;