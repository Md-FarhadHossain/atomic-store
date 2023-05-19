import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
// import Package from './Package/Package'
// import package1 from "../../assets/package-1.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";

const PackageSection = () => {

  const [packages, setPackages] = useState([])

  // const packages = [
  //   {
  //     id: 1,
  //     title: "আপনি কোন প্যাকেজ টি",
  //     image: package1,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, distinctio?",
  //   },
  //   {
  //     id: 2,
  //     title: "আপনি কোন প্যাকেজ টি",
  //     image: package1,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, distinctio?",
  //   },
  //   {
  //     id: 3,
  //     title: "আপনি কোন প্যাকেজ টি",
  //     image: package1,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, distinctio?",
  //   },
  // ];

 

useEffect(() => {
  fetch("https://atomic-store.vercel.app/packages")
  .then(res => res.json())
  .then(data => {
    setPackages(data)
    console.log(data)
  })

  
}, [])



  return (
    <>
      <section id="order_section">
        <div className="container mx-auto py-24 px-0 lg:px-0">
          <h1 className="font-sans lg:text-5xl md:text-4xl text-3xl mb-16 text-center font-semibold">
            আপনি কোন প্যাকেজ টি অর্ডার করতে চাচ্ছেন
          </h1>

          <div className="grid lg:px-0 md:px-0 px-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-8">
            {packages.map((onepackage) => (
              <div
                key={onepackage.id}
                className="border bg-white hover:shadow-none transition-shadow shadow-xl shadow-[#00000014] rounded-md"
              >
                {/* Image */}
                <div className="flex  w-full lg:h-[26rem] md:h-[16rem] h-[15rem] justify-center">
                  

                <img
                    className="rounded-lg w-[90%] object-cover"
                    src={onepackage.image}
                    alt="package"
                  />

        
                </div>

                {/* description */}
                <div className="p-4 lg:p-6">
                  <h1 className="text-2xl font-bold font-sans pb-4">
                    {onepackage.title}
                  </h1>
                  <p className="mb-4 font-sans font-semibold text-gray-600 text-xl">
                    {/* {onepackage.description} */}
                    <p className="flex items-center"><span className="text-green-400 mr-2"><FaDotCircle /></span>{onepackage.des1}</p>
                    <p className="flex items-center"><span className="text-green-400 mr-2"><FaDotCircle /></span>{onepackage.des5}</p>
                    <p className="flex items-center"><span className="text-green-400 mr-2"><FaDotCircle /></span><span><span className="font-bold"></span>{onepackage.des2}</span></p>
                    <p className="flex items-center"><span className="text-green-400 mr-2"><FaDotCircle /></span>{onepackage.des3}</p>
                    <p className="flex items-center"><span className="text-green-400 mr-2"><FaDotCircle /></span><span><span className="font-bold"></span>{onepackage.des4}</span></p>
                  </p>
                  <div className="flex">
                    <Link to={`/package/${onepackage._id}`}><Button>অর্ডার করুন</Button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageSection;
