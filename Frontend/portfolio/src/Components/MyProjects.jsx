import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import PROJECT_PIC from "../Components/Assests/img 4.jpeg";
import PROJECT_PIC_1 from "../Components/Assests/img 2.jpeg";
import PROJECT_PIC_2 from "../Components/Assests/img 5.jpeg";
import PROJECT_PIC_3 from "../Components/Assests/img 6.jpeg";
import PROJECT_PIC_4 from "../Components/Assests/img1.jpeg";

const projects = [
  {
    id: 1,
    title: "QR-Code-Generator",
    image: PROJECT_PIC,
    description: "Full Stack Polling App using MERN Stack | MongoDB, Express, React, Node.js",
    tags: ["React", "Css"],
  },
  {
    id: 2,
    title: "Notes app",
    image: PROJECT_PIC_1,
    description: "Responsive Website Using React JS & Tailwind CSS",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "POS-app",
    image: PROJECT_PIC_2,
    description: "Responsive Website Using React JS & Tailwind CSS",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Portfolio",
    image: PROJECT_PIC_3,
    description: "Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
  },
  {
    id: 5,
    title: "CRUD - app",
    image: PROJECT_PIC_4,
    description: "Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="container mx-auto px-8 ">
      <h2 className="text-3xl font-semibold text-center mb-5 bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] bg-clip-text text-transparent">
        My Projects
      </h2>
      <p className="text-sm text-center mt-4 leading-6">
           <p className="text-sm text-center mt-4 leading-6 mb-4">
            A versatile developer with hands-on expertise in modern technologies, 
            tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
            Below are some of the projects I've built using the MERN stack, React, and Tailwind CSS 
          </p>
          </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-gray-600 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MyProjects;
