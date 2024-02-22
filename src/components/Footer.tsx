import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {/* Social Media Icons */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
    
            <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col items-center md:items-start">
            {/* Phone Number */}
            <p className="text-sm">Phone: +123456789</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            {/* Address */}
            <p className="text-sm">Address: 123 Street, City, Country</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            {/* Email Address */}
            <p className="text-sm">Email: info@example.com</p>
          </div>
        </div>
          </div>
    
          <div className="container mx-auto mt-4 ">
        <p className="text-sm">&copy; 2024 Tech Innovate. All rights reserved.</p>
      </div>
        </footer>
      );
};

export default Footer;

 