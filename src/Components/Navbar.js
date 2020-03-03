import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { 
        MDBNavbar, 
        MDBNavbarBrand, 
        MDBNavbarNav, 
        MDBNavItem, 
        MDBNavLink, 
        MDBNavbarToggler, 
        MDBCollapse, 
        MDBDropdown,
        MDBDropdownToggle, 
        MDBDropdownMenu, 
        MDBDropdownItem, 
        MDBIcon,
        MDBBtn
      } from "mdbreact";


class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="white" light scrolling transparent expand="md" fixed="top">
        <MDBNavbarBrand className="waves-effect waves-light">
          <MDBNavLink to="/"><h5>Casa Tenoch</h5></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler color="dark" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav left>   
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/" onClick={this.toggleCollapse}><strong className="m-2">Inicio</strong></MDBNavLink>
              :
              <MDBNavLink to="/" ><strong className="m-2">Inicio</strong></MDBNavLink>}
            </MDBNavItem>

            <MDBNavItem>
            { this.state.isOpen ?
              <MDBNavLink to="/Nosotros" onClick={this.toggleCollapse}><strong className="m-2">Nosotros</strong></MDBNavLink>
              :
              <MDBNavLink to="/Nosotros" ><strong className="m-2">Nosotros</strong></MDBNavLink>}
            </MDBNavItem>

            <MDBNavItem>
              {this.state.isOpen ?
              <MDBNavLink to="/Eventos" onClick={this.toggleCollapse}><strong className="m-2">Eventos</strong></MDBNavLink>
              :
              <MDBNavLink to="/Eventos" ><strong className="m-2">Eventos</strong></MDBNavLink>}
            </MDBNavItem>
            
            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Espacios" onClick={this.toggleCollapse}><strong className="m-2">Espacios</strong></MDBNavLink>
              :
              <MDBNavLink to="/Espacios" ><strong className="m-2">Espacios</strong></MDBNavLink>}
            </MDBNavItem>

            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Contacto" onClick={this.toggleCollapse}><strong className="m-2">Contacto</strong></MDBNavLink>
              :
              <MDBNavLink to="/Contacto" ><strong className="m-2">Contacto</strong></MDBNavLink>}
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://instagram.com/jamalamar/" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-light" to='#'>
                  <MDBIcon fab icon="instagram" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://fb.me/SaintsHardSeltzer" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-dark" to="#">
                  <MDBIcon fab icon="facebook" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        
        

        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;