import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
