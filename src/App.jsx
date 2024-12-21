import React from "react";
import profile from "./assets/profile.png";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg text-center">
        <div className="mb-10">
          <div className="relative inline-block mb-6">
            <img
              src={profile}
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg profile"
            />
            <div className="absolute inset-0 rounded-full opacity-50"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">M.Kaif Khan</h1>
          <p className="text-lg text-gray-600">Full Stack Developer & Problem Solver</p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Links</h2>

        <div className="space-y-6">
          <LinkButton
            href="https://github.com/mkaif5"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            text="GitHub"
          />
          <LinkButton
            href="https://www.linkedin.com/in/mohammad-kaif-khan-36b9b62a8/"
            imgSrc="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1743033600&v=beta&t=DjrEusGD6Mp1kSXN33pATRhq78J5JMC33B0hTzcqnYU"
            text="LinkedIn"
          />
          <LinkButton
            href="https://www.youtube.com/@MOHAMMADKAIF-lh5ye"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            text="YouTube"
          />
          <LinkButton
            href="https://leetcode.com/u/MOHAMMED_KAIF5/"
            imgSrc="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
            text="Leetcode"
          />
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({ href, imgSrc, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full py-4 px-6 bg-white shadow-lg rounded-lg text-gray-800 font-semibold text-lg transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-[#f39c12] hover:text-white link-button"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center p-2">
          <img
            src={imgSrc}
            alt={text}
            className="w-8 h-8 group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <span className="text-xl">{text}</span>
      </div>
    </a>
  );
};

export default App;