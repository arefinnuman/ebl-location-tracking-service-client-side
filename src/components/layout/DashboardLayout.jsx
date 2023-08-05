import Image from "next/image";
import Link from "next/link";
import easternBankImage from "../../../public/eastern-bank-ltd.gif";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
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
        <Link href="/create-user">Create User</Link>
      </li>
      <li>
        <Link href="/users">View All users</Link>
      </li>
      <li>
        <Link href="/dashboard-locations">View all Locations</Link>
      </li>
    </>
  );

  return (
    <>
      <>
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
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                {" "}
                {/* Removed unnecessary justify-between */}
                <Image
                  width={300}
                  height={500}
                  src={easternBankImage}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary btn-sm btn-outline lg:hidden" // Removed unnecessary drawer-button class
          >
            Open drawer
          </label>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
            <li className="btn btn-primary btn-sm btn-outline">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </div>
        </div>
      </>
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
      <Footer />
    </>
  );
};

export default DashboardLayout;
