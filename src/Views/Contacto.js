import React from "react";
import { MDBRow, MDBCol, MDBView, MDBMask, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Contacto = () => {
  return (
    <section className="mt-5">
	    <MDBView
	          src={'https://mdbootstrap.com/img/Photos/Others/images/62.jpg'}
	          fixed
	    >
	    <MDBMask className='rgba-white-light' />
       {/*<h2 className="h1-responsive font-weight-bold text-center my-5">
        Cotactanos
      </h2>
     <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>*/}
      <MDBRow className="w-responsive mx-auto pt-5 m-5">
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1 text-center p-3" style={{'marginTop': '-3rem'}}>
                <h3 className="mt-2 text-white">
                  <MDBIcon icon="fa fa-envelope" /> Escríbenos:
                </h3>
              </div>

              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Nombre"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Correo"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Asunto"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Mensaje"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Enviar</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Miguel%20Lerdo%20de%20Tejada%20%23%2017%2C%20Col.%20Guadalupe%20Inn%2C%20Alcald%C3%ADa%20%C3%81lvaro%20Obreg%C3%B3n%2C%20CP%2001020%2C%20CDMX&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Casa Tenoch Inn"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Miguel Lerdo de Tejada # 17, Col. Guadalupe Inn, Alcaldía Álvaro Obregón, CP 01020, CDMX</p>
              <p className="mb-md-0"></p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 5512240436</p>
              <p>+ 5562352033</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>ventas@casatenoch.com </p>
              <p className="mb-md-0">contacto@casatenoch.com </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      </MDBView>
    </section>
  );
}


export default Contacto;