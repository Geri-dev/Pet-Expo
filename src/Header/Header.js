import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { Link } from 'react-scroll';
import NavBar from './NavBar';


// Header component that takes a setSelectedPet prop
function Header({ setSelectedPet }) {
  return (
    <div className="HeaderAreaRoot">
      <Logo />

      {/* NavBar component with setSelectedPet prop */}
      <NavBar setSelectedPet={setSelectedPet} />

      <LoginButton />
    </div>
  );
}

export default Header;


      
// Logo component for displaying the logo and website name
function Logo() {
  return (
    <Link to="Home" spy={true} smooth={true} duration={300} className="logoContainer">
      <FontAwesomeIcon className="logo" icon={faDog} transform={{ rotate: 320 }} />
      <div className="websiteName">PETINI</div>
    </Link>
  );
}


// LoginButton component for displaying the login button
function LoginButton(){

  return(
    <div className="LoginContainer">
      <div className="LoginButton">Login</div>
    </div>
  );
}








