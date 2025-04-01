import { CartType, QueryType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import Card from "../../../home/store-products/products/card";

const MyProducts = () => {
  const { data, isPending, isError }: QueryType<CartType[]> = useQueryHandler({
    url: "user/products",
    pathname: "my-product",
  });

  const { cart_loader } = useLoader();

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {isPending || isError
          ? cart_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default MyProducts;
