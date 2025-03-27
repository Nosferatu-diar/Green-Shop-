import type { FC } from "react";
import { Rate, Skeleton } from "antd";
import UserInfo from "./user-info";
import { CartType, QueryType } from "../../../@types";
import { HeartOutlined } from "@ant-design/icons";

const ShopInfo: FC<QueryType<CartType>> = ({ data, isPending, isError }) => {
  const size_style =
    "w-[28px] h-[28px] border hover:border-[#45a358] border-gray-400 rounded-full transition-color hover:text-[#45a358] font-medium cursor-pointer";
  const loading = isPending || isError;
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div className="flex max-[580px]:flex-col max-[580px]:items-start items-end justify-between border-b border-[#45a358] pb-2">
            <div className="flex  items-center gap-5">
              <UserInfo id={data?.created_by} />
              <div>
                <h3 className="text-[#3D3D3D] text-[28px] max-[400px]:text-lg font-bold">
                  {data?.title}
                </h3>
                <p className="font-bold text-[#46A358] text-[22px]">
                  ${data?.price}
                </p>
              </div>
            </div>
            <div>
              <Rate count={5} defaultValue={data?.rate} />
              <p>{data?.rate} Customer Review</p>
            </div>
          </div>

          <div className="mt-4">
            <p>Short Description:</p>
            <p className="max-[400px]:text-sm">{data?.short_description}</p>
          </div>
          <h2 className="text-[#3D3D3D]  text-[22px] pt-3 pb-2 font-[500]">
            Size:
          </h2>
          <div className="flex gap-2">
            <button className={` ${size_style} `}>S</button>
            <button className={` ${size_style} `}>M</button>
            <button className={` ${size_style} `}>L</button>
            <button className={` ${size_style} `}>XL</button>
          </div>
          <div className="flex items-center gap-5 max-[330px]:gap-2 my-4 *:cursor-pointer">
            <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
              BUY NOW
            </button>
            <button className="flex rounded-md items-center justify-center gap-1 text-base w-[130px] h-[40px] bg-transparent border border-[#46A358] text-[#46A358]">
              ADD TO CART
            </button>
            <button className="flex rounded-md items-center justify-center gap-1 text-base w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px]">
              <HeartOutlined className="text-[#46A358]" />
            </button>
          </div>
          <div className="text-[#727272;] text-[15px] font-normal my-3">
            <span className="text-[#A5A5A5] pr-2">SKU</span>
            {loading ? <Skeleton.Input /> : data?._id}
          </div>
          <div className="text-[#727272;] text-[15px] font-normal my-3">
            <span className="text-[#A5A5A5] pr-2">Categories</span>
            {loading ? <Skeleton.Input /> : data?.category.toUpperCase()}
          </div>
          <div className="text-[#727272;] text-[15px] font-normal my-3">
            <span className="text-[#A5A5A5] pr-2">Tags</span>
            {loading ? <Skeleton.Input /> : "Home, Gareden, Plant"}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
