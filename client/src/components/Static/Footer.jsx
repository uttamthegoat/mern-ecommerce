import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="text-center">
        <div className="text-gray-600">
          <button
            className="bg-transparent border-none"
            onClick={toggleContact}
          >
            Contact Us
          </button>
        </div>
        {contactOpen && (
          <div className="text-gray-600 flex flex-col">
            <a href="mailto:19516uttam@gmail.com">19516uttam@gmail.com</a>
            <a href="mailto:19516uttam@gmail.com">
              Email: sumanths947@gmail.com
            </a>
            <a href="mailto:19516uttam@gmail.com">
              Email: uttamthegoat@gmail.com
            </a>
            <a href="mailto:19516uttam@gmail.com">
              Email: vipulnayak@gmail.com
            </a>
          </div>
        )}
      </div>
      <div className="text-center text-gray-600">
        <Link href="/about-us">About Us</Link>
      </div>
      <div className="text-center text-gray-600">
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
    </footer>
  );
}

export default Footer;
