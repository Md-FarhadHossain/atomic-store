import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import { BiBell } from "react-icons/bi";


const Navbar = () => {
  const { user, logout, orderStatusUpadte } = useContext(UserContext);
  const [newOrders, setnewOrders] = useState([]);
  const [notificationBox, setNotificationBox] = useState(false)

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://atomic-store.vercel.app/orders?orderStatus=neworder")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnewOrders(data);
      });
  }, [orderStatusUpadte]);


  const handleNotification = () => {
    setNotificationBox(!notificationBox)
    console.log('working')
  }

  return (
    <nav className="z-10 sticky top-0 bg-white">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/" className="">
            <img className="lg:w-48 md:w-44 w-36" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="lg:flex md:flex hidden font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="lg:flex md:flex hidden font-semibold">
              <a href="">Books</a>
            </li>
            <li className="lg:flex md:flex hidden font-semibold">
              <a href="">About</a>
            </li>

            {user ? (
              <>
                <li className="lg:flex md:flex hidden font-semibold">
                  <a className="font-sans" href="#order_section">
                    অর্ডার করুন
                  </a>
                </li>
              </>
            ) : (
              <></>
            )}

            {/* <li className=""><a href="#order_section"><Button>অর্ডার করুন</Button></a></li> */}

            {!user ? (
              <>
                <li className="">
                  <a href="#order_section">
                    <Button>অর্ডার করুন</Button>
                  </a>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li  onClick={handleNotification} className="lg:flex md:flex hidden font-semibold">
                  <a className="text-3xl" href="#">
                    <BiBell />
                    {newOrders.length == 0 ? <></> : <><span className="text-sm bg-red-500 absolute top-3 left-8 w-6 h-6 flex justify-center items-center text-white rounded-full">
                      {newOrders.length}
                    </span>
                    {/* Message box */}
                      <div className={`absolute  ${notificationBox ? 'inline-block' : 'hidden'}  border top-[5rem] bg-white new_boxshadow p-4 rounded-lg overflow-y-scroll w-[20rem] h-[10rem]`}>
                        {
                          newOrders.map((order, index) => <div>
                            <h1 className="text-lg font-sans ">{index + 1}. {order.orderedPackage}</h1>
                          </div>)
                        }
                      </div>
                      {/* Message box end */}

                    </>}
                  </a>
                </li>
                <li className="">
                  <a onClick={handleLogout}>
                    <Button>Log Out</Button>
                  </a>
                </li>
                <li className="">
                  <Link to='/dashboard/new-order'>
                    <Button>Dashboard</Button>
                  </Link>
                </li>

                
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
