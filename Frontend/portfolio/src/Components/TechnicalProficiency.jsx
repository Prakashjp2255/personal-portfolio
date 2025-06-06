import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SkillCard from "./skillcard"; 
import Tabs from "./Tabs"; //  relative path
import { SKILLS, SKILL_TABS } from "../constants.js"; 

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    console.log("Tab clicked:", value);
    console.log(
      "Available skills:",
      SKILLS.map((s) => s.type)
    );

    if (value === "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const updatedList = SKILLS.filter((skill) => skill.type === value);
    console.log("Filtered skills:", updatedList);
    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and frameworks, dedicated to building
            efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px] mt-6">
          <AnimatePresence mode="wait">
            {tabData.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={<skill.icon className="w-6 h-6 text-primary" />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
