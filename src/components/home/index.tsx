import Navbar from "../navbar";
import Hero from "./hero";
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
      </main>
    </>
  );
};

export default HomeComponent;
