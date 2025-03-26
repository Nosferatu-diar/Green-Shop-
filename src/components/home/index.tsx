import Hero from "./hero";
import Info from "./info/info";
import Posts from "./posts";
import StoreProducts from "./store-products";
const HomeComponent = () => {
  return (
    <>
      <Hero />
      <StoreProducts />
      <Info />
      <Posts />
    </>
  );
};

export default HomeComponent;
