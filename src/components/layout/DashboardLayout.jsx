import jwtDecode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChartBar, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import easternBankImage from "../../../public/eastern-bank-ltd.gif";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      window.location.href = "/login";
    }
  }, []);

  const [user, setUser] = useState(null);

  const getUserFromToken = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          return decodedToken;
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const user = getUserFromToken();
    setUser(user);
  }, []);

  const fullName = [
    user?.fullName?.firstName,
    user?.fullName?.middleName,
    user?.fullName?.lastName,
  ]
    .filter((namePart) => namePart)
    .join(" ");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const userRole = user?.role;

  const navBarItems = (
    <>
      <li className="py-2">
        <Link
          href="/all-locations"
          className="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white"
        >
          <FaMapMarkerAlt className="text-lg mr-2" />{" "}
          <span className="text-base">EBL Locations</span>
        </Link>
      </li>
      {userRole === "admin" && (
        <li className="py-2">
          <Link
            href="/dashboard"
            className="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white"
          >
            <FaChartBar className="text-lg mr-2" />{" "}
            <span className="text-base">Dashboard</span>
          </Link>
        </li>
      )}
      <li className="py-2">
        <button
          onClick={handleLogOut}
          className="flex items-center px-3 py-2 text-gray-700 rounded-md transition duration-300 hover:text-primary hover:bg-secondary"
        >
          <FaSignOutAlt className="text-primary mr-2" />{" "}
          <span className="text-base">Logout</span>
        </button>
      </li>
    </>
  );

  const mobileNavBarItems = (
    <>
      <li>
        <Link href="/all-locations">EBL Locations</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>Logout</button>
      </li>
    </>
  );

  const menuItems = (
    <>
      <li className="text-xl text-primary">Edit And Delete</li>
      <li>
        <Link href="/dashboard-locations/branches">View Branches</Link>
      </li>
      <li>
        <Link href="/dashboard-locations/sub-branches">View Sub Branches</Link>
      </li>
      <li>
        <Link href="/dashboard-locations/agent-outlets">
          View Agent Outlets
        </Link>
      </li>
      <li>
        <Link href="/dashboard-locations/ebl-365">View EBL 365 Booths</Link>
      </li>
      <li>
        <Link href="/users">View All users</Link>
      </li>

      <li className="text-xl text-primary-focus">Create and Register</li>
      <li>
        <Link href="/branches/create">Create Branch</Link>
      </li>
      <li>
        <Link href="/sub-branches/create">Create sub Branch</Link>
      </li>
      <li>
        <Link href="/agent-banking-outlets/create">Create Agent Outlets</Link>
      </li>
      <li>
        <Link href="/ebl-365-booths/create">Create Ebl 365</Link>
      </li>
      <li>
        <Link href="/register">Create User</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-8 lg:px-16">
        <div className="navbar-start flex items-center">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mobileNavBarItems}
            </ul>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="flex items-center px-3 py-2 text-primary hover:text-white hover:bg-primary hover:border-primary border rounded-md transition duration-300 lg:hidden"
          >
            <FaChartBar className="text-xl mr-2" />
            Menu
          </label>
          <div className="flex justify-center items-center md:justify-start">
            <Link href="/" className="flex justify-center items-center">
              <Image
                width={250}
                height={160}
                src={easternBankImage}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden md:flex items-center mt-4 md:mt-0">
          <ul className="menu menu-horizontal space-x-4 md:mr-8">
            {navBarItems}
          </ul>
        </div>
      </div>
      {/*Drawer with children*/}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
            {menuItems}
          </ul>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default DashboardLayout;

