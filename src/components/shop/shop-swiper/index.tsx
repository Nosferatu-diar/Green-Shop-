import { useState, type FC } from "react";
import { Image, Skeleton } from "antd";
import { CartType, QueryType } from "../../../@types";

const ShopSwiper: FC<QueryType<CartType>> = ({ data, isPending, isError }) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-5 justify-between h-full max-[500px]:hidden">
        {data?.detailed_images.map((value, idx) => (
          <div
            key={idx}
            onClick={() => setImgSrc(value)}
            className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
          >
            <img className="w-full h-full" src={value} alt="img" />
          </div>
        ))}
      </div>
      <div className="cursor-pointer flex justify-center items-center w-full order-1">
        {isPending || isError ? (
          <Skeleton.Image className="w-full !h-[300px] active" />
        ) : (
          <Image
            className="w-full h-full max-[1165px]:!w-[500px] max-[1165px]:!h-[500px]"
            src={imgSrc ? imgSrc : data?.main_image}
            alt="img"
          />
        )}
      </div>
    </div>
  );
};

export default ShopSwiper;
