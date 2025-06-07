import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-blue-700 p-4 h-56"
    >
      <div className="flex gap-3">
        <div className="text-blue-600">{icon}</div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-blue-600 font-medium">{skillName}</p>
            <p className="text-xs text-secondary font-medium text-blue-600">
              {progress} %
            </p>
          </div>

          <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
            <div
              className="bg-primary h-[5px] rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="text-xs text-justify leading-5 mt-2 text-blue-600">
        {description}
      </p>
    </motion.div>
  );
};

export default SkillCard;
