import Image from "next/image";
import Link from "next/link";
import easternBankImage from "../../../public/eastern-bank-ltd.gif";

const Navbar = () => {
  const navBarItems = (
    <>
      <li>
        <Link href="/all-locations">Locations</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </>
  );

  const menuItems = (
    <>
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
        <Link href="/sign-up">Create a User</Link>
      </li>
      <li>
        <Link href="/create-admin">Create an Admin</Link>
      </li>
      <li>
        <Link href="/all-locations">View all Locations</Link>
      </li>
      <li>
        <Link href="/users">View All users</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
        <Link href="/" className="flex justify-center items-center">
          <Image width={300} height={500} src={easternBankImage} alt="logo" />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
        <div>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn-primary btn btn-sm px-4 py-2 btn-outline "
            >
              Dashboard
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 ">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

