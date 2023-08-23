import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DashBoardLayout({ children }) {
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Navbar />
      <MobileDropdown
        user={user}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
      />

      <div className="flex container mx-auto min-h-screen mt-10">
        <aside className="hidden lg:block w-1/5 pr-6 border-r border-gray-200">
          <NavMenu />
        </aside>
        <div className="w-full pl-6">{children}</div>
      </div>

      <Footer />
    </>
  );
}

const NavMenu = () => {
  return (
    <div className="space-y-5">
      <NavLink href="/dashboard-locations/branches">View Branches</NavLink>
      <NavLink href="/dashboard-locations/sub-branches">
        View Sub Branches
      </NavLink>
      <NavLink href="/dashboard-locations/agent-outlets">
        View Agent Outlets
      </NavLink>
      <NavLink href="/dashboard-locations/ebl-365">View EBL 365</NavLink>
      <NavLink href="/branches/create">Create Branch</NavLink>
      <NavLink href="/sub-branches/create">Create sub Branch</NavLink>
      <NavLink href="/agent-banking-outlets/create">
        Create Agent Outlets
      </NavLink>
      <NavLink href="/ebl-365-booths/create">Create Ebl 365</NavLink>

      <NavLink href="/users/registeredUser">View All users</NavLink>
      <NavLink href="/register">Create User</NavLink>
      <NavLink href="/users/requestedUser">Requested User</NavLink>
    </div>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block text-gray-700 hover:text-primary transition-colors duration-200 ease-in-out"
    >
      {children}
    </Link>
  );
};

const MobileSlider = ({ user, onLogout }) => (
  <div className="flex flex-col space-y-4 px-4">
    <Link
      href="/dashboard-locations/branches"
      className="transition duration-300 p-2 rounded"
    >
      View Branches
    </Link>

    <Link
      href="/dashboard-locations/sub-branches"
      className="transition duration-300 p-2 rounded"
    >
      View Sub Branches
    </Link>

    <Link
      href="/dashboard-locations/agent-outlets"
      className="transition duration-300 p-2 rounded"
    >
      View Agent Outlets
    </Link>

    <Link
      href="/dashboard-locations/ebl-365"
      className="transition duration-300 p-2 rounded"
    >
      View EBL 365
    </Link>

    <Link href="/users" className="transition duration-300 p-2 rounded">
      View All users
    </Link>

    <Link
      href="/branches/create"
      className="transition duration-300 p-2 rounded"
    >
      Create Branch
    </Link>

    <Link
      href="/sub-branches/create"
      className="transition duration-300 p-2 rounded"
    >
      Create sub Branch
    </Link>

    <Link
      href="/agent-banking-outlets/create"
      className="transition duration-300 p-2 rounded"
    >
      Create Agent Outlets
    </Link>

    <Link
      href="/ebl-365-booths/create"
      className="transition duration-300 p-2 rounded"
    >
      Create Ebl 365
    </Link>

    <Link href="/register" className="transition duration-300 p-2 rounded">
      Create User
    </Link>
  </div>
);

const MobileDropdown = ({ dropdownOpen, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown();
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, toggleDropdown]);

  return (
    <div
      className="dropdown lg:hidden relative flex items-center"
      ref={dropdownRef}
    >
      <button onClick={toggleDropdown} className="btn btn-ghost text-center">
        Click here to open menu
      </button>
      <div
        style={{
          width: dropdownOpen ? "250px" : "0",
          height: "100%",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: "rgba(255,255,255,0.9)",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <MobileSlider />
      </div>
    </div>
  );
};

