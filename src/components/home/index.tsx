import Footer from "../footer/footer";
import Navbar from "../navbar";
import Hero from "./hero";
import Info from "./info/info";
import Posts from "./posts";
import StoreProducts from "./store-products";
const HomeComponent = () => {
  return (
    <>
      <header className="w-[90%] m-auto max-w-[1440px]">
        <Navbar />
      </header>
      <main className="w-[90%] m-auto max-w-[1440px]">
        <Hero />
        <StoreProducts />
        <Info />
        <Posts />
      </main>
      <footer className="w-[90%] m-auto max-w-[1440px]">
        <Footer />
      </footer>
    </>
  );
};

export default HomeComponent;
