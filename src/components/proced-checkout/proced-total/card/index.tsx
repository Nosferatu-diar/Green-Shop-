import { FC } from "react";
import { CartTypeData } from "../../../../@types";

const Card: FC<CartTypeData> = ({
  main_image,
  title,
  _id,
  userPrice,
  counter,
}) => {
  return (
    <div>
      <div className="my-5 mt-7 bg-[#eee] p-2 flex items-center justify-between rounded-sm">
        {/* Image and title */}
        <div className="flex items-center gap-4 w-[40%]">
          <img className="w-[70px] h-[70px]" src={main_image} alt="img" />
          <div>
            <h3 className="text-[16px] max-[360px]:text-sm font-medium">
              {title}
            </h3>
            <p className="text-[14px] font-normal max-[330px]:text-[8px] pt-[10px] max-[360px]:text-[12px] max-[]">
              <span className="text-[#A5A5A5]">SKU:</span> {_id}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="text-[#727272] text-[16px] max-[360px]:text-sm font-medium w-[20%]">
          (X{counter})
        </div>

        {/* Total price */}
        <div className="text-[#727272] text-[16px] font-medium w-[20%] max-[950px]:hidden">
          ${Number(userPrice).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Card;
