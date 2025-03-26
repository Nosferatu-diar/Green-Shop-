import CardTotla from "./card-total";
import Shopping from "./shopping";

const ProductsShopComponent = () => {
  return (
    <section className=" py-5">
      <div className="grid grid-cols-[3fr_1fr] gap-5 max-[1024px]:grid-cols-1 mx-auto">
        <Shopping />
        <CardTotla />
      </div>
    </section>
  );
};

export default ProductsShopComponent;
