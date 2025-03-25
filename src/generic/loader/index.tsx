import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="mt-2">
        <Skeleton.Input className="!w-full !h-[40px]" />
      </div>
    ));
  };

  const discount_loader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-[20px]">
        <Skeleton.Input className="!w-full !h-[40px]" />
        <Skeleton.Input className="!w-full !h-[40px] mt-[20px]" />
        <Skeleton.Image className="!w-full !h-[200px] mt-[20px]" />
      </div>
    );
  };

  const cart_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image className="!w-full !h-[320px]" />
        <Skeleton />
      </div>
    ));
  };

  return { category_loader, discount_loader, cart_loader };
};

export default useLoader;
