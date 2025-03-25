import { FC } from "react";
import { CategoryType } from "../../../../../@types";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const CategoriesItem: FC<CategoryType> = (props) => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  return (
    <div
      onClick={() =>
        setParam({
          category: props.route_path,
          range_min,
          range_max,
          sort,
          type,
        })
      }
    >
      <div
        key={props._id}
        className={`flex items-center cursor-pointer justify-between mt-3 ${
          category === props.route_path &&
          "text-[#45a358] underline font-semibold"
        }`}
      >
        <h3>{props.title}</h3>
        <h3>{Math.abs(props.count)}</h3>
      </div>
    </div>
  );
};

export default CategoriesItem;
