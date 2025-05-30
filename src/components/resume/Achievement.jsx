import React from "react";
import { motion } from "framer-motion";
import { react , Nowgray, css,javascript } from "../../assets/index";
const Achievement = () => {
return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  p-10 rounded-lg grid grid-cols-2 gap-8">
        <h2 className="text-5xl font-bold  col-span-2 text-center mb-6">Achievements</h2>
      <div className="bg-gray-100 p-2 rounded-lg text-center">
        <h2 className="text-xl font-bold text-black mb-4">Internship Web Devlopment</h2>
        <img src={Nowgray} alt="Achievement 1" className="w-full h-auto max-h-[300px] object-contain mb-4" />
        <p className="text-black">Web Development Internship (5 months): Nowgray IT Services Pvt Ltd, Lucknow</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-lg text-center">
        <h2 className="text-xl font-bold text-black mb-4">React Certificate</h2>
        <img src={react} alt="Achievement 2" className="w-full h-auto max-h-[300px] object-contain mb-4" />
        <p className="text-black"> React Certificate by Hacker Rank</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-lg text-center">
        <h2 className="text-xl font-bold text-black mb-4">JavaScript Cirtificate</h2>
        <img src={javascript} alt="Achievement 3" className="w-full h-auto max-h-[300px] object-contain mb-4" />
        <p className="text-black"> JavaScript Certificate by Hacker Rank.</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-lg text-center">
        <h2 className="text-xl font-bold text-black mb-4">CSS Certificate </h2>
        <img src={css} alt="Achievement 4" className="w-full h-auto max-h-[300px] object-contain mb-4" />
        <p className="text-black">CSS Certificate by Digicoder .</p>
      </div>
    </motion.div>
  );
};

export default Achievement;
