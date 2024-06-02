import React from 'react'
import "./contactus.css";
import msg_icon from "./email.png";
import mail_icon from "./gmail.png";
import phone_icon from "./telephone.png";
import location_icon from "./placeholder.png";


// ContactUs component for displaying contact information and a contact form
const ContactUs = () => {
  return (
    <div className = "contact">

     {/* Left column for contact information */}
      <div className = "contacts-col">
        <h3>Send us a message <img src={msg_icon} alt = ""/> </h3>
        <p>Feel free to reach out through contact form or find our contact
        information below. 
        Your feedback, questions, and suggestions are
        important to us as we strive to provide exceptional service to our
        petini community</p>
        <ul>
          <li><img src = {mail_icon} alt = ""/> petini@gmail.com</li>
          <li><img src = {phone_icon} alt = ""/> +355 67-555-1004</li>
          <li><img src = {location_icon} alt = ""/>Albania, Tirane, Rruga Elbasanit</li>
        </ul>
      </div>

      {/* Right column for the contact form */}
      <div className = "contacts-col">
        <form>
          <label>Your Name</label>
          <input type = "text" name = "name" placeholder= "Enter your name"
            required
          />
          <label>Phone Number</label>
          <input type = "tel" name = "phone" placeholder= "Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea name = "message" rows = "6" placeholder= "Enter you message" required></textarea>
          <button type = "submit" className = "btn">Submit Now</button>
        </form> 
      </div>

    </div>
  )
}

export default ContactUs;
          