import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { toast } from "react-hot-toast";

const SelectedPackage = () => {
  const packageData = useLoaderData();
  const navigate = useNavigate();
  // console.log(data)

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const handleOrder = async (event) => {
    event.preventDefault();

    let date = new Date()
 

    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amPm = 'AM'
    // console.log(h)

    if (hours >= 12){
        hours -= 12;
        amPm = 'PM'
    }

    let day = date.getDay()
    if(day == 0) {
      day = 'Sunday'
    }
    if(day == 1) {
      day = 'Monday'
    }
    if(day == 2) {
      day = 'Tuesday'
    }
    if(day == 3) {
      day = 'Wednesday'
    }
    if(day == 4) {
      day = 'Thursday'
    }
    if(day == 5) {
      day = 'Friday'
    }
    if(day == 6) {
      day = 'Saturday'
    }
    let getDate = date.getDate()
    let month = date.getMonth()
    if(month == 0) {
      month = 'January'
    }
    if(month == 1) {
      month = 'February'
    }
    if(month == 2) {
      month = 'March'
    }
    if(month == 3) {
      month = 'April'
    }
    if(month == 4) {
      month = 'May'
    }
    if(month == 5) {
      month = 'June'
    }
    if(month == 6) {
      month = 'July'
    }
    if(month == 7) {
      month = 'August'
    }
    if(month == 8) {
      month = 'September'
    }
    if(month == 9) {
      month = 'October'
    }
    if(month == 10) {
      month = 'November'
    }
    if(month == 11) {
      month = 'December'
    }
    let year = date.getFullYear()


    const name = event.target.name.value
    const number = event.target.number.value
    const address = event.target.address.value
    const time = `${hours}:${minutes} (${amPm})`
    const fullDate = `${getDate} ${month} ${year}`
    const orderedPackage = packageData.title
    const orderStatus = 'neworder'

    const userData = {
      orderedPackage,
      name,
      number,
      address,
      time,
      day,
      fullDate,
      orderStatus
    }

     const makeOrder = await fetch(`https://atomic-store.vercel.app/orders`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userData),
      });
      const orderJson = await makeOrder.json();
      console.log(orderJson.acknowledged)
      if(orderJson.acknowledged){
        navigate('/order-overview')
        toast.success('Your order is placed!')
      }
      console.log(userData);
  };

  return (
    <>
      <section className="bg-[#f4f4f4]">
        <div className="container mx-auto pb-24 px-4 lg:px-0">
          {/* <img src={packageData.image} alt="package image" /> */}
          <h1 className="text-center lg:mb-12 mb-4 lg:text-5xl md:text-4xl text-2xl text-gray-700 font-sans font-semibold lg:pt-12 md:pt-12 pt-4">
            {packageData.title} 
            <p className="text-lg mt-2"><span className="text-red-500">*</span>অগ্রিম এক টাকাও দেওয়া লাগবে না, প্রোডাক্ট হাতে পাওয়ার পরে পেমেন্ট করবেন<span className="text-red-500">*</span></p>
          </h1>

          <form
            onSubmit={handleOrder}
            className="flex lg:justify-between md:justify-between justify-center lg:flex-row md:flex-row flex-col "
          >
            {/* Left section */}
            <div className="bg-white grid gap-6 lg:w-[62%] md:w-[55%] w-full mb-6 lg:mb-0 md:mb-0 px-6 py-8 rounded-xl shadow-lg">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-sans font-medium" htmlFor="">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="আপনার নাম *"
                  required
                  className="input border-gray-400 input-bordered w-full"
                />
              </div>
              {/* Number */}
              <div className="flex flex-col">
                <label className="font-sans font-medium" htmlFor="">
                  মোবাইল নাম্বার <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="মোবাইল নাম্বার *"
                  required
                  className="input border-gray-400 input-bordered w-full"
                />
              </div>
              {/* Address */}
              <div className="flex flex-col">
                <label className="font-sans font-medium" htmlFor="">
                  আপনার ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="আপনার ঠিকানা *"
                  required
                  className="input border-gray-400 input-bordered w-full"
                />
              </div>
            </div>
            {/* Right section */}

            <div className="lg:w-1/3 md:w-1/3 w-full items-start bg-white p-6 rounded-xl shadow-lg grid gap-4">
              {/* Items Total */}
              <div className="flex items-center justify-between">
                <span>Items Total</span>
                <span>৳ {parseInt(packageData.price)}</span>
              </div>
              {/* Delivery Fee */}
              <div className="flex items-center justify-between">
                <span>Delivery Fee</span>
                <span>৳ 120</span>
              </div>
              {/* Total Payment */}
              <div className="flex border-t pt-4 items-center justify-between">
                <span>Total Payment</span>
                <span>৳ {parseInt(packageData.price) + 120}</span>
              </div>
              {/* Button */}
              <div className="w-full">
                
                <button type="submit" className="w-full">
                  <Button>অর্ডার করুন</Button>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SelectedPackage;
