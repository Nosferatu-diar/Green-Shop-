import { useParams } from "react-router-dom";
import useQueryHandler from "../../hooks/useQueryHandler";
import ShopSwiper from "./shop-swiper";
import type { CartType, QueryType } from "../../@types";
import ShopInfo from "./shop-info";
import ShopDescription from "./shop-decription";

const ShopComponent = () => {
  const { category, id }: { category?: string; id?: string } = useParams();
  const { data, isPending, isError }: QueryType<CartType> = useQueryHandler({
    pathname: "product-id",
    url: `flower/category/${category}/${id}`,
  });
  return (
    <div className="py-10">
      <div className="grid grid-cols-2 max-[1165px]:grid-cols-1 gap-10 ">
        <ShopSwiper
          data={data}
          isPending
          isLoading={isPending}
          isError={isError}
        />
        <ShopInfo
          data={data}
          isPending
          isLoading={isPending}
          isError={isError}
        />
      </div>
      <ShopDescription
        data={data}
        isPending
        isLoading={isPending}
        isError={isError}
      />
    </div>
  );
};

export default ShopComponent;
