import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Eventos = () => {
  return (
    <div className="px-5 pb-5">
      <MDBCardBody className="text-center">
        <h1 className="font-weight-bold text-center my-5 pt-5">
          EVENTOS ESPECIALES
        </h1>
        <p className="h6-responsive text-center w-responsive mx-auto mb-5">
          CASA TENOCH INN se adapta a las necesidades de tu evento, ya sea empresarial o social.
        </p>

        <MDBRow className="pt-5 pb-5">        
          <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="../Assets/empresariales.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="building" className="pr-2" />
                Empresariales
              </h6>
            </a>
            <h4 className="font-weight-bold mb-3">
              <strong>Conferencias & Reuniones</strong>
            </h4>
            <p className="dark-grey-text">
              Contamos con espacios ideales para realizar juntas de negocios, 
              conferencias y capacitaciones, las cuales pueden incluir servicio 
              de Coffee Break en una amplia variedad de opciones.
            </p>
            <MDBBtn color="orange" rounded size="md">
              Ver Más
            </MDBBtn>
          </MDBCol>


          {/*<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
	          <MDBView hover className="rounded z-depth-2 mb-4" waves>
	            <img
	              className="img-fluid"
	              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
	              alt=""
	            />
	            <MDBMask overlay="white-slight" />
	          </MDBView>
	          <a href="#!" className="deep-orange-text">
	            <h6 className="font-weight-bold mb-3">
	              <MDBIcon icon="graduation-cap" className="pr-2" />
	              Educativos
	            </h6>
	          </a>
	          <h4 className="font-weight-bold mb-3">
	            <strong>Clases & Cursos</strong>
	          </h4>
	          
	          <p className="dark-grey-text">
	            At vero eos et accusamus et iusto odio dignissimos ducimus qui
	            blanditiis voluptatum deleniti atque corrupti quos dolores.
	          </p>
	          <MDBBtn color="deep-orange" rounded size="md">
	            Ver Más
	          </MDBBtn>
	        </MDBCol>*/}


          <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="../Assets/sociales.jpeg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="users" className="pr-2" />
                Sociales
              </h6>
            </a>
            <h4 className="font-weight-bold mb-3">
              <strong>Eventos Personalizados</strong>
            </h4>
            
            <p className="dark-grey-text">
              Contamos con espacios ideales para realizar catas, 
              cocteles y eventos recreativos.
            </p>
            <MDBBtn color="orange" rounded size="md">
              Ver Más
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <hr/>

        <h3 className="h1-responsive font-weight-bold black-text text-center my-5 py-3">
          Todos nuestros espacios cuentan con:
        </h3>

	    <MDBRow>
		  <MDBCol sm="4" className="mb-3">
		  		<MDBIcon icon="wifi" size="2x" className="orange-text"/>
		  		<h3>Wifi</h3>
		  </MDBCol>

		  <MDBCol sm="4" className="mb-3">  
	            <MDBIcon icon="snowflake" size="2x" className="orange-text"/>
	            <h3>Aire Acondicionado</h3>
		  </MDBCol>

		  <MDBCol sm="4" className="mb-3">
	            <MDBIcon icon="hands-helping" size="2x" className="orange-text"/>
	            <h3>Asistencia</h3>
		  </MDBCol>
		</MDBRow>
      </MDBCardBody>
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

export default Eventos;