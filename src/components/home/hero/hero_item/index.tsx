import { FC } from "react";
import { HeroCarouselType } from "../../../../@types";

const HeroItem: FC<HeroCarouselType> = (props) => {
  return (
    <div className="bg-[#f5f5f5] !flex items-center px-10 mt-5 py-5">
      <div>
        <h3 className="text-[#3D3D3D] text-sm md:text-base font-medium">
          {props.subTitle}
        </h3>
        <h2 className="font-black text-[#3D3D3D] uppercase py-3 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl  sm:text-base text-sm">
          {props.title}
          <span className="text-[#46A358]">.Planet</span>
        </h2>
        <p className="w-3/5 text-[#727272]  text-[12px]  mb-5 max-md:w-[100%] lg:text-[16px] max-sm:leading-4">
          {props.description}
        </p>
        <button
          className="xl:py-2 xl:px-5 md:py-1 md:px-3 py-1 px-2  rounded-[6px] bg-[#46A358] text-white max-[400px]:text-sm
          text-[12px]  uppercase"
        >
          {props.buttonText}
        </button>
      </div>
      <div className="relative max-[400px]:hidden">
        <img src={props.big_img_url} alt="big" />
        <img
          className="absolute bottom-0"
          src={props.small_img_url}
          alt="small"
        />
      </div>
    </div>
  );
};

export default HeroItem;
