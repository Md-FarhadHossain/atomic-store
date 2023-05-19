import React, { useEffect, useState } from 'react'

const NewOrder = () => {
    const [newOrders, setNewOrders] = useState([])

  useEffect(() => {
    fetch("https://atomic-store.vercel.app/orders?orderStatus=neworder")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewOrders(data);
      });
  }, []);

  const handlePending = (event) => {
    event.preventDefault()
    console.log('working')
    
  }

  return (
    <div>
        
        NewOrder {newOrders.length}

        <section className="p-6">
        <div className="overflow-x-auto">
          <table className="table rounded-lg border table-zebra table-compact w-full">
            <thead>
              <tr className="text-center rounded-lg bg-gray-200">
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
              {newOrders.map((order, index) => (
                <tr className="border text-center">
                  <th>{index + 1}</th>
                  <td>{order.orderedPackage}</td>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>{order.number}</td>
                  <td>{order.time}</td>
                  <td>{order.day}</td>
                  <td>{order.fullDate}</td>
                  {/* <td>Canada</td> */}
                  {/* <td>12/16/2020</td> */}
                  <td>
                    <button>
                      <select className="select border-gray-300 select-xs select-bordered w-full max-w-xs">
                        <option onClick={handlePending} selected>Pending</option>
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