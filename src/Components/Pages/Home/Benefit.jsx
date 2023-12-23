import React from "react";

const Benefit = () => {
  return (
    <div className="bg-[#161420] md:pt-20 px-12 md:pb-40 pb-20 text-white">
      <div className="max-w-[1300px] mx-auto flex lg:flex-row flex-col justify-between items-center">
        <div>
          <h2 className="lg:text-2xl sm:text-xl text-lg sm:flex-nowrap flex-wrap text-white font-semibold flex gap-10 lg:justify-start justify-center">
            {" "}
            <span>TEAM.</span> <span>CUSTOMER.</span> <span>COMMUNITY</span>
          </h2>
          <h1 className=" mt-10 lg:text-5xl  lg:mr-auto lg:ml-0 mx-auto sm:text-4xl text-3xl font-extrabold max-w-lg text-gray-200 md:leading-[80px] leading-[50px] lg:text-start text-center">
            Streamlined Task Mastery Ultimate Platform
          </h1>
          <p className="text-gray-400 max-w-2xl lg:px-0 px-3 my-5 md:text-xl text-lg font-medium lg:text-start text-center ">
           Join hands to shape the future and create impactful,
            lasting collaborations. Explore a versatile task management hub for
            developers, students, and beyond. Find efficiency and convenience
            tailored to your needs.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="bg-gradient-to-r flex items-center gap-2  hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500 text-white font-semibold py-2 px-6 lg:text-xl text-lg mb-4 rounded-md shadow-md hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>

        <div className=" flex flex-col space-y-4 items-center">
          <div className="flex md:gap-24 items-center justify-between">
            <img
              src="/images/student.png"
              alt=""
              className="sm:w-[200px] drop-shadow-xl  w-[150px]"
            />
            <img
              src="/images/corporate.png"
              alt=""
              className="sm:w-[200px] drop-shadow-xl w-[150px]"
            />
          </div>
          <div className="flex md:gap-24 items-center justify-between">
            <img
              src="/images/grafics.png"
              alt=""
              className="sm:w-[200px] drop-shadow-xl w-[150px]"
            />
            <img
              src="/images/coder.png"
              alt=""
              className="sm:w-[200px]  w-[150px]"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Benefit;
