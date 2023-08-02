import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

