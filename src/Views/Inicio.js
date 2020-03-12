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
  MDBCarouselItem
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
        interval={3000}
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="../Assets/Carousel/teotihuacan.jpg"
                alt="First slide"
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
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
}

export default Inicio;