import React from 'react';
import { Link, scroller } from 'react-scroll';


// NavBar component that takes a setSelectedPet prop
function NavBar({ setSelectedPet }) {

  // Array of navbar items
  const navbarItems = ['Home', 'Pets', 'About Us', 'Contact Us'];


  
  // Function to handle dropdown item click
  const handleDropdownClick = (petType) => {

    setSelectedPet(petType);   // Set the selected pet type
    scroller.scrollTo('gallery', {   // Scroll to the gallery section
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="navbarContainer">
      {navbarItems.map((navbarItem, index) => (
        <div key={index} className="singleNavbarItem">

        {/* Check if the item is 'Pets' to render dropdown */}
          {navbarItem === 'Pets' ? (
            <div className="dropdown">
              <span className="navbarItem">
                {navbarItem}
              </span>
              <div className="dropdownContent">
                <div className="dropdownItem" onClick={() => handleDropdownClick('Dog')}>Dogs</div>
                <div className="dropdownItem" onClick={() => handleDropdownClick('Cat')}>Cats</div>
                <div className="dropdownItem" onClick={() => handleDropdownClick('Bird')}>Birds</div>
              </div>
            </div>
          ) : (

            // Link for other navbar items
            <Link
              to={navbarItem.toLowerCase().replace(' ', '')}
              spy={true}
              smooth={true}
              duration={300}
              className="navbarItem"
            >
              {navbarItem}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavBar;