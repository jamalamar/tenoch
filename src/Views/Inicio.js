import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer, 
  MDBCarousel, 
  MDBCarouselInner, 
  MDBCarouselItem,
  MDBIcon
} from 'mdbreact';


function Inicio () {
    return (
      <div>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        interval={100000}
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="../Assets/Carousel/teoti.jpg"
                alt="First slide"
              />
              <MDBMask className="flex-center" overlay="white-slight">
                <MDBCol md='8' className='mb-4 text-center responsive'>
                  <h1 className='display-3 z-depth-3 white-text rgba-black-light font-weight-bold m-5' style={{letterSpacing: '12px'}}>CASA TENOCH</h1>
                </MDBCol>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="../Assets/Carousel/piano.jpg"
                alt="Second slide"
              />
              <MDBMask className="flex-center" overlay="white-slight">
                <MDBCol md='4' className='mb-4 text-center responsive'>
                  <h1 className='display-3 z-depth-3 white-text warning-color font-weight-bold mr-5'>CASA</h1>
                  <h1 className='display-3 z-depth-3 white-text warning-color font-weight-bold ml-5'>TENOCH</h1>
                  <h1 className='display-3 z-depth-3 white-text warning-color font-weight-bold mr-5'>INN</h1>
                </MDBCol>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="../Assets/Carousel/chichen.jpg"
                alt="Third slide"
              />
              <MDBMask className="flex-center" overlay="white-slight">
                <MDBCol md='4' className='mb-4 text-center responsive'>
                  <h1 className='display-3 z-depth-3 black-text warning-color font-weight-bold mr-5'>CASA</h1>
                  <h1 className='display-3 z-depth-3 black-text warning-color font-weight-bold ml-5'>TENOCH</h1>
                  <h1 className='display-3 z-depth-3 black-text warning-color font-weight-bold mr-5'>INN</h1>
                </MDBCol>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>

        <main>
          <MDBContainer>

          <hr className="my-5" />
          <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="../Assets/lightbulb.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="lightbulb" className="pr-2" />
                Concepto
              </h6>
            </a>
            <p className="h5-responsive text-justify font-weight-lighter mb-4" style={{letterSpacing: '1px'}}>
              <p className="font-weight-bolder" style={{display: 'inline', letterSpacing: '1px'}}>CASA TENOCH INN </p> 
              nació con la idea de crear un centro de negocios boutique
               que nos permitiera brindar atención personalizada y de gran calidad a 
               nuestros clientes bajo un concepto histórico que destacara las raíces 
               prehispánicas de nuestro país.
            </p>
            <p className="h4-responsive text-justify font-weight-lighter" style={{letterSpacing: '1px'}}>
              Así, debemos parte del nombre a la capital del Imperio Mexica, La Gran 
              Tenochtitlan, fundada por nuestros antepasados nahuas hace más de 600 años.  
              Por su parte la palabra <p className="font-weight-bolder" style={{display: 'inline', letterSpacing: '1px'}}>“INN” </p>
               alude a una de las zonas más bellas, exclusivas 
              y céntricas de la Ciudad de México, nos referimos a la colonia Guadalupe Inn, 
              lugar en el que se encuentra ubicada la casa que alberga los espacios que 
              fueron pacientemente pensados y diseñados para la comodidad de nuestros 
              clientes.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="landmark" className="pr-2" />
                Diseño
              </h6>
            </a>
            <p className="h5-responsive text-justify font-weight-lighter mb-4" style={{letterSpacing: '1px'}}>
              Nuestros espacios poseen un diseño ecléctico que combina la arquitectura de 
              una casona de los años 30s con un diseño vanguardista y funcional en donde 
              es posible encontrar salas de juntas y capacitación con diferentes escenarios 
              y capacidades que van desde un aula con pupitres estilo salón de clases, 
              pasando por la tradicional y tecnológicamente equipada sala de juntas de 
              consejo, hasta llegar a la privacidad, comodidad y buen gusto de una acogedora 
              sala amueblada con confortables sillones colocados en torno a la elegante 
              chimenea forrada en mármol, sin lugar a dudas un distintivo inigualable de 
              nuestro salón Chichen Itzá.
            </p>
            <MDBBtn
              color="orange"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
              href="/Espacios"
            >
              Ver Más
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="../Assets/itza.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="../Assets/coffee.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="coffee" className="pr-2" />
                Descubre
              </h6>
            </a>
            <p className="h5-responsive text-justify font-weight-lighter mb-4" style={{letterSpacing: '1px'}}>
              Podemos encontrar el concepto precolombino en cada una de nuestras salas y 
              salones que llevan nombres de diferentes zonas arqueológicas que han sido 
              halladas a lo largo del territorio nacional, así como en cada uno de nuestros 
              planes de “coffee break” cuyas denominaciones hacen referencia a la 
              organización política, económica, social y cultural de la época.
            </p>
            <p className="h5-responsive text-justify font-weight-lighter mb-4" style={{letterSpacing: '1px'}}>
              Búsquenos en <a href="https://instagram.com/casa_tenoch/" target="__blank" className="font-weight-bolder orange-text" style={{display: 'inline', letterSpacing: '1px'}}>Instagram<MDBIcon icon="link" size='xs'/> </a>
              en donde podrá visualizar nuestras instalaciones y enterarse 
              de los exclusivos eventos de Cata, Piano & Business en los que CASA TENOCH INN 
              fusiona la oportunidad de realizar actividades de networking a gran nivel con 
              la cautivadora experiencia de acudir a una selecta cata amenizada con música de piano. 
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />

          </MDBContainer>
        </main>
      </div>
    );
}

export default Inicio;