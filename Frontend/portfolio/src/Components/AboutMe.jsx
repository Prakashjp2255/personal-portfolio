import React from "react";
import PROFILE_PIC from "../Components/Assests/img 2.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ABOUT_ME = {
  content: `I am a passionate and detail-oriented web developer with hands-on experience in building responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.

 My expertise includes working with modern JavaScript frameworks like React and Angular, along with backend technologies such as Node.js and Express. I’m always eager to learn new technologies and take on new challenges that help me grow professionally.`,

 socialLinks: [
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      url: "www.linkedin.com/in/m-jaya-prakash",
    },
    {
      label: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Prakashjp2255",
    },
    {
      label: "Email",
      icon: FaEnvelope,
      url: "prakashjp8808@gmail.com",
    },
  ]

};


const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] rounded-3xl overflow-hidden ">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic about"
            className="w-full h-full object-cover profile-pic-about "
          />
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
          About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>
          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a
                key={item.label}
                className="cursor-pointer group"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="text-2xl text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
