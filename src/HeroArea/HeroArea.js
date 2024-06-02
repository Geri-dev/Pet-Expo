import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './heroarea.css';


// HeroArea component that acts as a container for LeftArea and RightArea
function HeroArea(props){
  return(
    <div className="heroAreaContainer">
      <LeftArea />
      <RightArea />
    </div>
  );
}

export default HeroArea;


// LeftArea component for displaying the header, description, and search bar
function LeftArea(){

  // Sub-header and sub-description text
  const SubHeader = 'Find Your Favourite Pet';
  const SubDescription = 'Explore a world of delightful pets and enriching experiences, join us in celebrating the unconditionallove and happiness that pets bring into our lives.';
  
  return(
    <div className = "leftAreaRoot">
      <div className = "leftAreaSubContainer">
        <div className = "Sub-Header">{SubHeader}</div>
        <div className = "Sub-Description">{SubDescription}</div>
        <div className = "searchContainer">
          <input placeholder = "Explore Pets ... " className="searchInput" />
          <FontAwesomeIcon className = "searchButton" icon={faMagnifyingGlass} />
        </div>
      </div>
      
    </div>
  );
}


// RightArea component for displaying the image
function RightArea(){

  return(
    <div className = "rightAreaRoot">
      <div className = "rightAreaContainer">
        <img className = "rightAreaImage" src = "dogy.png" alt = "" />
      </div>
    </div>
  );
}

