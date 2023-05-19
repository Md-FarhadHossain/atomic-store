import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/AuthContext';
import { BiBell } from "react-icons/bi";

const Navbar = () => {
  const {user, logout} = useContext(UserContext)
  const [pendingOrders, setPendingOrders] = useState([]);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://atomic-store.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingOrders(data);
      });
  }, []);
  return (
    <nav className="shadow-md z-10 sticky top-0 bg-white">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to='/' className="">
            <img className="lg:w-48 md:w-44 w-36" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="lg:flex md:flex hidden font-semibold"><Link to="/">Home</Link></li>
            <li className="lg:flex md:flex hidden font-semibold"><a href="">Books</a></li>
            <li className="lg:flex md:flex hidden font-semibold"><a href="">About</a></li>
            
            {
              user ? <><li className="lg:flex md:flex hidden font-semibold"><a className="font-sans" href="#order_section">অর্ডার করুন</a></li></>: <></>
            }

            {/* <li className=""><a href="#order_section"><Button>অর্ডার করুন</Button></a></li> */}
            

          {
            !user ? <><li className=""><a href="#order_section"><Button>অর্ডার করুন</Button></a></li></> : <> <li className="lg:flex md:flex hidden font-semibold"><a className='text-3xl' href="#"><BiBell /> <span className='text-sm bg-red-500 absolute top-3 left-8 w-6 h-6 flex justify-center items-center text-white rounded-full'>{pendingOrders.length}</span></a></li> <li className=""><a onClick={handleLogout}><Button>Log Out</Button></a></li></>
          }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
