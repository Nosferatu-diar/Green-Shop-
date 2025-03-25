import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <section className="flex items-start gap-5 mt-6">
      <Categories />
      <Products />
    </section>
  );
};

export default StoreProducts;
