import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Frontend  Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-pink-700">
          Hi, I'm <span className="text-designColor capitalize">Prachi Pandey</span>
        </h1>
        <h2 className="text-4xl font-bold text-pink-700 font-bold">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Highly motivated and detail-oriented Computer Science graduate currently interning in Web Development. Possesses a strong 
foundation in software and web development, with hands-on experience in building projects like Desk Automation. Actively 
seeking opportunities to leverage academic knowledge and technical skills in a dynamic and challenging environment.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner