import React from "react";
import bg from "../../assets/hero-image.jpg";
import rightImg from "../../assets/right-image.webp";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        className="h-[91vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 lg:px-0 flex items-center lg:flex-row md:flex-row flex-col justify-between">

          {/* Left section */}
          <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col  items-start lg:gap-8 md:gap-5 gap-4">
            <h2 className="font-sans text-2xl lg:text-left md:text-left text-center w-full">আপনার সোনামণির জন্য</h2>
            <h1 className="font-bold leading-relaxed lg:text-6xl md:text-5xl lg:text-left md:text-left text-center w-full text-[1.8rem]">
              Magic <span className="text-[#FE9553] ">Handwriting</span> <br />
              Practice Book
            </h1>
            <div className="flex lg:justify-start md:justify-start justify-center w-full">
            <a href="#order_section">
              <Button>অর্ডার করুন</Button>
            </a>
            </div>
          </div>
          {/* Left section end */}


          {/* Right section */}
          <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-8  flex lg:justify-end md:justify-end justify-center">
            <img className="w-[80%] rounded-lg shadow-lg shadow-[#00000014]" src={rightImg} alt="right image" />
          </div>
          {/* Right section end */}

        </div>
      </section>
    </>
  );
};

export default HeroSection;
