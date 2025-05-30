import React from 'react'
import { FaGithub , FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full   p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-black">Prachi  Pandey</h3>
        <p className="text-lg font-normal ">
          Frontend Developer
        </p>
        <p className="text-base  tracking-wide">
        Highly motivated and detail-oriented Computer Science graduate currently interning in Web Development. Possesses a strong 
foundation in software and web development, with hands-on experience in building projects like Desk Automation. Actively 

        </p>
        <p className="text-base  flex items-center gap-2">
          Phone: <span className="text-lightText">+6392043940</span>
        </p>
        <p className="text-base  flex items-center gap-2">
          Email: <span className="text-lightText">prachipandit500@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/pandeyprachi8572" target="_blank" rel="noopener noreferrer">
                     <span className="bannerIcon">
                       <FaGithub />
                     </span>
                   </a>
                   <a href="https://x.com/PrachiP36388733" target="_blank" rel="noopener noreferrer">
                     <span className="bannerIcon">
                       <FaTwitter />
                     </span>
                   </a>
                   <a href="https://www.linkedin.com/in/prachi-pandey-1b2b552b7" target="_blank" rel="noopener noreferrer">
                     <span className="bannerIcon">
                       <FaLinkedinIn />
                     </span>
                   </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft