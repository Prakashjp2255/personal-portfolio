import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full px-8 py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-2">Contact Me</h2>
        <p className="text-center text-gray-600 mb-10">
          A versatile developer with hands-on expertise in modern technologies, tools, and frameworks,
          dedicated to building efficient, scalable, and user-centric solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-orange-50 px-6 py-4 rounded-lg shadow">
              <FaEnvelope className="text-orange-600" />
              <span>alex.doe@timetoprogram.com</span>
            </div>
            <div className="flex items-center gap-4 bg-orange-50 px-6 py-4 rounded-lg shadow">
              <FaPhoneAlt className="text-orange-600" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-4 bg-orange-50 px-6 py-4 rounded-lg shadow">
              <FaGlobe className="text-orange-600" />
              <span>https://timetoprogram.com</span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:opacity-90"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
