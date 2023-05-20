import React, { useEffect, useState } from "react";

const PendingOrder = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    fetch("https://atomic-store.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingOrders(data);
      });
  }, []);

  return (
    <>
      <section className="p-6">
        <div className="overflow-x-auto new_boxshadow bg-white rounded-xl">
          <table className="table table-zebra rounded-lg border  w-full">
            <thead>
              <tr className="text-center text-black rounded-xl bg-[#FE9553]">
                <th className="">NO.</th>
                <th>Ordered Package</th>
                <th>Name</th>
                <th>Adress</th>
                <th>Number</th>
                <th>Time</th>
                <th>Day</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order, index) => (
                <tr className="border text-center">
                  <th className="bg-gray-100 border">{index + 1}</th>
                  <td className="bg-gray-100 font-sans font-medium text-lg border">{order.orderedPackage}</td>
                  <td className="bg-gray-100 border">{order.name}</td>
                  <td className="bg-gray-100 border">{order.address}</td>
                  <td className="bg-gray-100 border">{order.number}</td>
                  <td className="bg-gray-100 border">{order.time}</td>
                  <td className="bg-gray-100 border">{order.day}</td>
                  <td className="bg-gray-100 border">{order.fullDate}</td>
                  {/* <td>Canada</td> */}
                  {/* <td>12/16/2020</td> */}
                  <td className="bg-gray-100">
                    <button>
                      <select className="select border-gray-300 select-xs select-bordered w-full max-w-xs">
                        <option selected>Pending</option>
                        <option>Confirm</option>
                        <option>Cencel</option>
                      </select>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="text-center bg-gray-100">
                <th>No.</th>
                <th>Ordered Package</th>
                <th>Name</th>
                <th>Address</th>
                <th>Number</th>
                <th>Time</th>
                <th>Day</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default PendingOrder;
