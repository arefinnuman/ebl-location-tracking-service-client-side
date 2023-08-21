import jwtDecode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChartBar, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import easternBankImage from "../../../public/eastern-bank-ltd.gif";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

  return (
    <div className="navbar bg-base-100 flex flex-col lg:flex-row justify-between items-center py-2 px-4 md:px-8 lg:px-16">
      <div className="sm:justify-around flex items-center">
        <Logo />
        <Greeting user={user} fullName={fullName} />
        <MobileDropdown
          user={user}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleLogOut={handleLogOut}
        />
      </div>
      <DesktopNavbar user={user} handleLogOut={handleLogOut} />
    </div>
  );
};

const MobileDropdown = ({
  user,
  dropdownOpen,
  toggleDropdown,
  handleLogOut,
}) => (
  <div className="dropdown lg:hidden">
    <button onClick={toggleDropdown} className="btn btn-ghost">
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
    </button>
    {dropdownOpen && (
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <NavBarItems user={user} onLogout={handleLogOut} />
      </ul>
    )}
  </div>
);

const Logo = () => (
  <div className="flex justify-around items-center lg:justify-start">
    <Link href="/" className="flex justify-center items-center">
      <Image width={250} height={160} src={easternBankImage} alt="logo" />
    </Link>
  </div>
);

const Greeting = ({ fullName }) => (
  <div className="pl-8 hidden lg:inline-block">
    <span className="text-lg">
      Hello <span className="text-primary">{fullName}</span>
    </span>
  </div>
);

const DesktopNavbar = ({ user, handleLogOut }) => (
  <div className="navbar-end hidden lg:flex items-center mt-4 lg:mt-0">
    <ul className="menu menu-horizontal space-x-4 lg:mr-8">
      <NavBarItems user={user} onLogout={handleLogOut} />
    </ul>
  </div>
);

const NavBarItems = ({ user, onLogout }) => (
  <>
    <li>
      <Link
        href="/all-locations"
        className="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white"
      >
        <FaMapMarkerAlt className="text-lg mr-2" />
        EBL Locations
      </Link>
    </li>
    {user?.role === "admin" && (
      <li>
        <Link
          href="/dashboard"
          className="flex items-center px-3 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white"
        >
          <FaChartBar className="text-lg mr-2" />
          Dashboard
        </Link>
      </li>
    )}
    <li>
      <button
        onClick={onLogout}
        className="flex items-center px-3 py-2 text-gray-700 rounded-md transition duration-300 hover:text-primary hover:bg-secondary"
      >
        <FaSignOutAlt className="text-primary mr-2" />
        Logout
      </button>
    </li>
  </>
);

export default Navbar;

