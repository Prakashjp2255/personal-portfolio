import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full px-8 py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] bg-clip-text text-transparent mb-2">Contact Me</h2>
        <p className="text-center text-gray-600 mb-10">
          A versatile developer with hands-on expertise in modern technologies, tools, and frameworks,
          dedicated to building efficient, scalable, and user-centric solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-blue-100 px-6 py-4 rounded-lg shadow">
              <FaEnvelope className="text-blue-600" />
              <span className="text-blue-900">prakashjp8808@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-blue-100 px-6 py-4 rounded-lg shadow">
              <FaPhoneAlt className="text-blue-600" />
              <span className="text-blue-900">+91 9342586490</span>
            </div>
            <div className="flex items-center gap-4 bg-blue-100 px-6 py-4 rounded-lg shadow">
              <FaGlobe className="text-blue-600" />
              <span className="text-blue-900">www.linkedin.com/in/m-jaya-prakash </span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-900"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-900"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] hover:opacity-90"
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
