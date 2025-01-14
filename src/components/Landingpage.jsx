import React from "react";
import hero from "../assets/hero.jpeg";

function Landingpage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[90vh]">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
          <h1 className="font-paragraph text-4xl text-black text-center lg:text-left">
            Welcome to <span className="font-logo text-main">WebLingo</span>
          </h1>
          <p className="font-paragraph text-lg text-gray-500 mt-4 text-center lg:text-left">
            We offer a wide range of language courses taught by experienced and qualified instructors, who are passionate about teaching and dedicated to helping you achieve your language goals.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            {/* Join Us Button */}
            <button
              type="button"
              className="relative font-heading bg-[#4a6ff2] inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-[#3c5bcc] focus:outline-none focus:ring-2 focus:ring-[#4a6ff2] focus:ring-offset-2"
            >
              <span>Join us</span>
            </button>

            {/* Our Courses Link */}
            <a
              href="/courses"
              className="relative font-heading bg-yellow-400 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              <span>Our courses</span>
            </a>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <img
            src={hero}
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] object-contain"
            alt="Illustration"
          />
        </div>
      </div>
    </>
  );
}

export default Landingpage;
