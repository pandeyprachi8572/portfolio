import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
const Education = () => {
return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA (Batchlor of computer science)"
            subTitle="University of Prayagraj (2021 - 2024)"
            result="68.6%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          
          <ResumeCard
            title="Science "
            subTitle="National Inter College (2019 - 2021)"
            result="71.6%"
            des=" education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="National Inter College (2017 - 2019)"
            result="74%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12  font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Engineer"
            subTitle="Nowgray It Services pvt Ltd Lko  - (2024- )"
            result="LUCKNOW"
            des="Job Lucknow's hiring process is an important part of our culture. Our team members care deeply about their colleagues and the people who make up our organization.."
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
}
export default Education;