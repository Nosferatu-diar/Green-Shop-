import { ArrowRightOutlined } from "@ant-design/icons";
import type { FC } from "react";
import type { InfoMockItemType } from "../../../../@types";

const InfoItem: FC<InfoMockItemType> = (props) => {
  return (
    <div className="mt-10 bg-[#FBFBFB] flex items-center justify-between relative gap-10 mb-5 max-[500px]:flex-col">
      <div className="h-[300px] max-[609px]:h-auto">
        <img className="max-[500px]:w-[60%]" src={props.img} alt="img" />
      </div>
      <div className="text-end w-[55%] max-[500px]:w-full max-[500px]:text-center">
        <h2 className="text-[#3D3D3D] font-black text-[18px] uppercase leading-6">
          {props.title}
        </h2>
        <p className="text-[#727272] text-[14px] leading-6 font-normal">
          {props.description}
        </p>
        <div className="flex items-center justify-end mt-4 max-[500px]:justify-center">
          <div className="group cursor-pointer w-[143px] h-[40px] flex items-center gap-1 justify-center bg-[#46a358] text-white">
            <span>Find More</span>
            <ArrowRightOutlined className="group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 left-4" src={props.vektor} alt="img" />
    </div>
  );
};

export default InfoItem;
