
// Importing all components used in the App

import './App.css';
import Header from './Header/Header';
import HeroArea from './HeroArea/HeroArea';
import Feature from './Feature/Feature';
import Title from './Offering/Title';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import { Element } from 'react-scroll'; // Importing Element from react-scroll for smooth scrolling to sections
import Gallery from './Gallery/Gallery';
import { useState } from 'react'; // Importing useState hook from React




function App() {

   // State to track the selected pet
  const [selectedPet, setSelectedPet] = useState('');


  return (
    <div className="App">

      <Element name="home">
        <Header setSelectedPet={setSelectedPet} />
      </Element>

      <HeroArea />
      
      <Element name="pets">
        <Title subTitle="CHOOSE YOUR PET" title="What We Offer" />
        <Feature />
      </Element>
      
        
      <Element name="aboutus">
        <Title subTitle="Why" title="Get To Know Us" />
        <AboutUs />
      </Element>

      
      
      <Element name = 'gallery'>
        <Title subTitle="Look At" title="GALLERY" />
        <Gallery selectedPet={selectedPet}/>
      </Element>
      
      
      <Element name="contactus">
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <ContactUs />
      </Element>
      


    </div>
  );
}
export default App;
      

      
      
      
      
    

        
