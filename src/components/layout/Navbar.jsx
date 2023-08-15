import Image from "next/image";
import Link from "next/link";
import easternBankImage from "../../../public/eastern-bank-ltd.gif";

const Navbar = () => {
  const navBarItems = (
    <>
      <li>
        <Link href="/all-locations">EBL Locations</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar bg-base-100 flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            {navBarItems}
          </ul>
        </div>
        <div className="flex justify-around items-center">
          <Link href="/" className="flex justify-between items-center">
            <Image width={300} height={500} src={easternBankImage} alt="logo" />
          </Link>
        </div>
      </div>
      <li className="btn btn-primary btn-sm btn-outline lg:hidden">
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <button
        onClick={handleLogOut}
        className="btn btn-sm btn-secondary ml-2 lg:hidden"
      >
        Logout
      </button>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
        <li className="btn btn-primary btn-sm btn-outline">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <button
          onClick={handleLogOut}
          className="btn btn-sm btn-secondary ml-2 hover:bg-error"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

