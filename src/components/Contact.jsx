import React from "react";

function Contact() {
  return (
    <>
      <div className="flex h-[70vh] items-center justify-center flex-col sm:flex-col lg:flex-row">
        <div>
          <p className="text-3xl font-heading p-2">
            Contact us to start your journey with{" "}
            <span className="font-logo text-main text-4xl">Weblingo </span> today
          </p>
          <p className="text-gray-500 font-paragraph">
            Tbon Mok
          </p>
          <p className="text-gray-500 font-paragraph">Tel: Swl khtk</p>
          <p className="text-gray-500 font-paragraph">
            Email: E+E@aui.ma
          </p>
        </div>
      </div>
      <div className="flex h-[70vh] items-center justify-center  flex-col bg-main sm:flex-col lg:flex-col">
        <div>
          <p className="text-4xl text-white pb-4 font-heading">
            Send us a message
          </p>
        </div>
        <div>
          <form className="grid grid-cols-2 gap-4 font-paragraph">
            <input
              type="text"
              placeholder="Name"
              className="bg-white rounded-md h-16 pl-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-md h-16 pl-3"
            />
            <input
              type="text"
              placeholder="Write your message"
              className="bg-white rounded-md col-span-2 h-16 pl-3"
            />
            <button className="col-span-2 bg-button2 h-16 rounded-md hover:bg-opacity-30 hover:border hover:border-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
