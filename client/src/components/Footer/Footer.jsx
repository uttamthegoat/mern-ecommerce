import React, { useState } from 'react';

function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  const footerStyle = {
    marginTop: '15px', 
  };

  return (
    <footer className="bg-gray-200 py-4" style={footerStyle}>
      <div className="text-center">
        <div className="text-gray-600">
          <button className="bg-transparent border-none" onClick={toggleContact}>
            Contact Us
          </button>
        </div>
        {contactOpen && (
          <div className="text-gray-600">
            <p>Phone: +1234567890</p>
            <p>Email: sumanths947@gmail.com</p>
            <p>Email: uttamthegoat@gmail.com</p>
            <p>Email: vipulnayak@gmail.com</p>
          </div>
        )}
      </div>
      <div className="text-center text-gray-600">
        <a href="/about-us">About Us</a>
      </div>
      <div className="text-center text-gray-600">
        <a href="/terms-of-use">Terms of Use</a>
      </div>
    </footer>
  );
}

export default Footer;
