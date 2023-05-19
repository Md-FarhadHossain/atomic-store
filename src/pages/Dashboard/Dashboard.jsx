import React from "react";
import { Link, Outlet, redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import hamburger from "../../assets/hamburger-menu.png";
import { FcDoughnutChart } from "react-icons/fc";
import { FaDotCircle } from "react-icons/fa";

const Dashboard = () => {


  return (
    <>
      <section>
        <div>
          <Navbar />
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* <!-- Page content here --> */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden ml-4 mt-4"
              >
                {/* <img src={hamburger} alt="hamburger" /> */}
              </label>
              <Outlet />
            </div>
            <div className="drawer-side shadow-lg">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li>
                <div className="flex items-center">
                <span className="text-blue-400">
                      <FaDotCircle />
                    </span>
                  <Link htmlFor="my-drawer-2" to="new-order">
                    New Order
                  </Link>
                </div>
                </li>
                <li>
                <div className="flex items-center">
                <span className="text-yellow-400">
                      <FaDotCircle />
                    </span>
                  <Link htmlFor="my-drawer-2" to="pending-order">
                    Pending Order
                  </Link>
                </div>
                </li>
                <li className="">
                  <div className="flex items-center">
                    <span className="text-green-400">
                      <FaDotCircle />
                    </span>
                    <span>
                      <Link to="confirm-order">Confirm Order</Link>
                    </span>
                  </div>
                </li>
                <li>
                    <div className="flex items-center">
                    <span className="text-red-400">
                      <FaDotCircle />
                </span>
                  <Link to="cancel-order">Cancel Order</Link>
                    </div>
                </li>
                <li>
                <div className="flex items-center">
                <span className="text-gray-500">
                      <FaDotCircle />
                </span>
                  <Link to="all-order">All Order</Link>
                </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
