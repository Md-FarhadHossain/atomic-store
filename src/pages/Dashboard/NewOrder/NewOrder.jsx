import React, { useContext, useEffect, useState } from 'react'
import { toast } from "react-hot-toast";
import { UserContext } from '../../../context/AuthContext';
import { BsFillCloudHailFill } from "react-icons/bs";

const NewOrder = () => {
    const [newOrders, setNewOrders] = useState([])
    const { orderStatusUpadte, setOrderStatusUpadte } = useContext(UserContext);
    // const [orderStatusUpadte, setOrderStatusUpadte] = useState(false)

  useEffect(() => {
    fetch("https://atomic-store.vercel.app/orders?orderStatus=neworder")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewOrders(data);
      
      });
  }, [orderStatusUpadte]);

  const handlePending = async (order) => {
    // event.preventDefault()
    const orderStatus = 'pending'
    const result = {
      orderStatus
    }

  await  fetch(`http://localhost:5000/orders/${order._id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast.success('Order is pending Now!')
          setOrderStatusUpadte(!orderStatusUpadte)
        }
      });
  



    console.log(order._id,orderStatus)
    
  }

  return (
    <div>
          
          NewOrder {newOrders.length}

        <section className="p-6">
        <div className="overflow-x-auto new_boxshadow bg-white rounded-xl">
          <table className="table rounded-lg border table-zebra table-compact w-full">
            <thead>
              <tr className="text-center text-white rounded-xl bg-[#2d45ff]">
                <th>NO.</th>
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

            {newOrders.length == 0 ? <><div className='flex relative left-[41rem] py-8 justify-center w-full'>
                <span className='text-[10rem] text-gray-200'>{<BsFillCloudHailFill />}</span>
                </div> <p className='text-center relative left-[41rem] pb-8 text-gray-300 font-semibold'>You have 0 new order</p></> : <></>}
              
              {newOrders.map((order, index) => (
                <tr key={order._id} className="border text-center">
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
                      <option disabled selected>Take Action</option>
                        <option onClick={() => handlePending(order)} >Pending</option>
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
    
    </div>
  )
}

export default NewOrder