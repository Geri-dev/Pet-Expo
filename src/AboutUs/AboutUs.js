import React from 'react';
import './aboutus.css';
import aboutImage from './aboutus.jpg';


// AboutUs component for displaying information about the website
function AboutUs(){
  return(
    <div className = "about-us">
      <div className = "about-left">
        <img src = {aboutImage} alt = "" className = "about-img" />
      </div>
      <div className = "about-right">
        <h3>ABOUT PETINI</h3>
        <h2>We are passionate about sharing our pets with you</h2>
        <p>Our mission is to provide pet owners with reliable, 
        up-to-date information on pet care, nutrition, and training. 
        Whether you're a new pet parent or an experienced owner,
        we offer resources and support to help you give your furry, 
        feathered, or scaly friends the best life possible. </p>
        <p>At Animal World, we understand that every pet is unique, 
        and so are their needs. Our website features a comprehensive range of
        resources tailored to different types of pets, including dogs, cats, birds.
        Explore our extensive library of articles on pet. </p>
        <p>Join our forums to connect with fellow pet owners, share stories, and seek advice.
        Participate in our events and webinars to learn from experts and stay updated on the latest in pet care.
        We also offer a directory of pet services, including veterinarians, groomers, and trainers, to help you find the best care for your pets
        Together, we can create a loving and supportive environment for all pets.</p>
      </div>
    </div>
  ); 

}

export default AboutUs;


                                                     