
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  p-8 rounded-lg"
    >
      <h2 className="text-xl font-bold text-black mb-4">Technical Skills</h2>
      <ul className="list-disc list-inside ">
        <li> Programming Languages: C, C++, Python  </li>
        <li> Web Development: HTML, CSS, JavaScript, React, Redux Toolkit, Bootstrap, Tailwind CSS, Node.js 
        (learning) </li>
        <li>  Database Management: MySQL, Firebase  </li>
        <li> Platforms/Tools: VS Code, Git, GitHub </li>
        
      </ul>
    </motion.div>
  );
};

export default Experience