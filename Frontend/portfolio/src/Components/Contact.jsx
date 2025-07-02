import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fyq3fln", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full px-8 py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] bg-clip-text text-transparent mb-2">Contact Me</h2>
        <p className="text-center text-gray-600 mb-10">
          A versatile developer with hands-on expertise in modern technologies...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
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
              <span className="text-blue-900">www.linkedin.com/in/m-jaya-prakash</span>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-900"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700 text-blue-900"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
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
