import { FC } from "react";
import { CartType } from "../../../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Card: FC<CartType> = (props) => {
  const style_icons =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]";

  return (
    <div className="cursor-pointer border-transparent border-t hover:border-[#46A358]">
      <div className="group h-[320px] max-[1000px]:300px max-[600px]:h-[250px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          src={props.main_image}
          className="w-4/5 max-[600px]:w-full h-[80%] max-[600px]:h-full  object-cover"
          alt={props.title}
        />
        <div className="hidden items-center absolute bottom-4 gap-5 group-hover:flex">
          <div className={style_icons}>
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
          <div className={style_icons}>
            <HeartOutlined className="text-[22px]" />
          </div>
          <div className={style_icons}>
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>

      <h3 className="mt-1">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-[#46A358] text-[18px] font-bold">
          {props.price} $
        </h3>
        <h3 className="font-[300] text-[#A5A5A5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
