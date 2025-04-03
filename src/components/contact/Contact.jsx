
import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation ==========
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ========== Handle Form Submission ==========
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please enter a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you, ${username}! Your message has been sent successfully.`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-gray-300">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <ContactLeft />
        <div className="w-full lg:w-[60%] bg-white p-6 lg:p-8 rounded-lg shadow-lg">
          <form className="w-full flex flex-col gap-6">
            {/* Error Message 
            {errMsg && (
              <p className="py-3 bg-red-100 border border-red-400 text-red-600 text-center rounded-md">
                {errMsg}
              </p>
            )}*/}
            {/* Success Message */}
            {successMsg && (
              <p className="py-3 bg-green-100 border border-green-400 text-green-600 text-center rounded-md">
                {successMsg}
              </p>
            )}
            {/* Name & Phone Number */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2">
                <p className="text-sm text-black font-bold uppercase mb-2">Your Name</p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full bg-white text-black border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm text-black font-bold uppercase mb-2">Phone Number</p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="w-full bg-white text-black border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <p className="text-sm text-black font-bold uppercase mb-2">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full bg-white text-black border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {/* Subject */}
            <div>
              <p className="text-sm text-black font-bold uppercase mb-2">Subject</p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className="w-full bg-white text-black border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter the subject"
              />
            </div>
            {/* Message */}
            <div>
              <p className="text-sm text-black font-bold uppercase mb-2">Message</p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full bg-white text-black border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                rows="6"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="w-full">
              <button
                onClick={handleSend}
                className="w-full h-12 bg-blue-600 text-white rounded-lg text-base tracking-wider uppercase hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
            {/* Error Message Again */}
            {errMsg && (
              <p className="py-3 bg-red-100 border border-red-400 text-red-600 text-center rounded-md">
                {errMsg}
              </p>
            )}
            {/* Success Message Again */}
            {successMsg && (
              <p className="py-3 bg-green-100 border border-green-400 text-green-600 text-center rounded-md">
                {successMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
