import type { CartType } from "../../../../@types";
import Loader from "../../../../generic/loader";

import { Empty } from "antd";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import Card from "../../../home/store-products/products/card";

const Products = () => {
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQueryHandler({
      pathname: "user-products",
      url: `user/products`,
    });
  const { cart_loader } = Loader();

  if (!data?.length && !isError && !isLoading) {
    return (
      <div className="w-full flex flex-col gap-[15px]">
        <Empty />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-[15px]">
      <div className="grid grid-cols-4 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
        {isLoading || isError
          ? cart_loader()
          : data?.map((item) => <Card key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default Products;
