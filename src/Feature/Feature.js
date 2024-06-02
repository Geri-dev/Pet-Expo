import React from 'react';
import './feature.css';
import animal_1 from './cat5.png';
import animal_2 from './dog-puppy.png';
import animal_3 from './bird1.png';


// Feature component for displaying images of animals below the hero area
function Feature(props) {
  
  return (
    <div className = "Animals">
      <div className = "Animal">
        <img src ={animal_1}  alt = "" />
      </div>
      <div className = "Animal">
        <img src ={animal_2} className = "cat" alt = "" />
      </div>
      <div className = "Animal">
        <img src ={animal_3}  alt = "" />
      </div>
    </div>
  );

}

export default Feature;
  


         
       

        
        
          


