import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div>
          <h2 className="text-white text-xl font-bold">CS — Ticket System</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaTwitter /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail /> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
