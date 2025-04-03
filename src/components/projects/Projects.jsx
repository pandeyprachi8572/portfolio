import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree , projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] "
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title = "Quiz App"
          des="  I have created a quiz app using HTML , CSS and  JavaScript  with responsive all features !"
          src={projectOne}
        />
        <ProjectsCard
          title="Weather App"
          des= "I have created a weather app using HTML , CSS ,  JavaScript and Bootstrap. The app is fully responsive and utilizes a weather API."
          src={projectTwo}
        />
        <ProjectsCard
          title="Food Items "
          des=" I have created a Food Items using HTML , CSS , React and tailwind css . The Food Items is fully responsive and when click to add button and then add tha lower box add the food items !"
          src={projectThree}
        />
        <ProjectsCard
          title="Wall Clock "
          des="I have created a Wall Clock using HTML , CSS , and  Javascript , and Boostrap . the clock is fully responsive !"
          src={projectFour}
        />
        <ProjectsCard
          title=" Company Employee Web Page"
          des=" I have created a Company employee web page  using HTML , CSS ,and  Javascript , Boostrap . the company employee web page is fully responsive "
          src={projectFive}
        />
        <ProjectsCard
          title=" Digital Snug"
          des=" I have created a Digital Snug using HTML , CSS ,and  Javascript , Boostrap . the Digital Snug  web page is fully responsive "
          src={projectSix}
        />
      </div>
    </section>
  );
}
export default Projects