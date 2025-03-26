import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const MainLayout = () => {
  return (
    <>
      <header className="w-[90%] m-auto max-w-[1440px]">
        <Navbar />
      </header>
      <main className="w-[90%] m-auto max-w-[1440px]">
        <Outlet />
      </main>
      <footer className="w-[90%] m-auto max-w-[1440px]">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
