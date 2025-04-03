
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-5 lgl:gap-10"
    >
      {/* Part One - Education */}
      <div>
        <div className="py-3 lgl:py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[3px]">2019 - 2024</p>
          <h2 className="text-2xl md:text-3xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-1 lgl:mt-2 w-full h-auto border-l-[4px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="BCA (Bachelor of Computer Science)"
            subTitle="University of Prayagraj (2021 - 2024)"
            result="68.6%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Science"
            subTitle="National Inter College (2019 - 2021)"
            result="71.6%"
            des="National Inter college of kadipur sultanpur mathimatics  of up board"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="National Inter College (2017 - 2019)"
            result="74%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* Part Two - Job Experience */}
      <div>
        <div className="py-3 lgl:py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[3px]">2024 - 2025</p>
          <h2 className="text-2xl md:text-3xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-3 lgl:mt-6 w-full h-auto border-l-[4px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="Software Engineer"
            subTitle="Nowgray IT Services Pvt Ltd, Lucknow (2024 - Present)"
            result="LUCKNOW"
            des="Job Lucknow's hiring process is an important part of our culture. Our team members care deeply about their colleagues."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Web Developer - (2024)"
            result="LUCKNOW"
            des="I have recently completed a 6-month training in web development."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Developer - (2024 - 2025)"
            result="Lucknow"
            des="I have recently completed a 6-month training in web development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
