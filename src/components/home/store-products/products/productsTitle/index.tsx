// import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";
import { Select } from "antd";
// import { SplitCellsOutlined } from "@ant-design/icons";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  const handleChange = (value: string) => {
    setParam({ category, range_min, range_max, sort: value, type });
  };
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-[850px]:flex max-[850px]:items-start max-[850px]:justify-between">
      <div className="flex items-center max-[850px]:flex-col-reverse max-[850px]:items-start gap-4 justify-between *:max-[350px]:text-sm">
        <div className="flex items-center gap-4 cursor-pointer ">
          {title_category.map((value) => (
            <h3
              className={`${
                type === value.label && "text-[#45a358] underline"
              }`}
              onClick={() =>
                setParam({
                  category,
                  range_min,
                  range_max,
                  sort,
                  type: value.label,
                })
              }
              key={value.id}
            >
              {value.title}
            </h3>
          ))}
        </div>

        <div className="flex items-center gap-2 ">
          <p className="max-[350px]:hidden">Sort by:</p>
          <Select
            defaultValue={sort}
            className="w-[150px] "
            onChange={handleChange}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "Most Expensive" },
            ]}
          />
        </div>
      </div>
      {/* responsive */}
      {/* <button
        className="hidden max-[850px]:flex items-center cursor-pointer gap-2 p-2 border rounded-md
         shadow-[0_10px_20px_0_rgba(70,163,88,0.3)] bg-gradient-to-br from-[rgba(70,163,88,0.45)] to-[#46a358] py-1 px-2 text-white  max-[820px]:block
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <SplitCellsOutlined className="text-lg" />
        ) : (
          <SplitCellsOutlined className="text-lg" />
        )}
      </button>
      {isOpen && (
        <div className="flex items-center gap-4 cursor-pointer max-[850px]:flex-col max-[850px]:items-start">
          {title_category.map((value) => (
            <h3
              className={`${
                type === value.label && "text-[#45a358] underline"
              }`}
              onClick={() =>
                setParam({
                  category,
                  range_min,
                  range_max,
                  sort,
                  type: value.label,
                })
              }
              key={value.id}
            >
              {value.title}
            </h3>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default ProductsTitle;
