import { Empty } from "antd";
import { CartType, QueryType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import Card from "./card";
import ProductsTitle from "./productsTitle";

const Products = () => {
  const { getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const { data, isLoading, isError }: QueryType<CartType[]> = useQueryHandler({
    pathname: `flowers-category-${category}range_min-${range_min}-range_max-${range_max}-type-${type}-sort-${sort}`,
    url: `flower/category/${category}`,
    params: {
      range_min,
      range_max,
      sort,
      type,
    },
  });
  const { cart_loader } = useLoader();

  if (!data?.length && !isLoading && !isError) {
    return (
      <section className="w-full">
        <ProductsTitle />
        <Empty />
      </section>
    );
  }

  return (
    <section className="w-full ">
      <ProductsTitle />
      <div className="grid grid-cols-3 max-[1130px]:grid-cols-2  gap-4 mt-8">
        {isLoading || isError
          ? cart_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </section>
  );
};

export default Products;
