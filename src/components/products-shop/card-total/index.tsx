import { Form } from "antd";
import { Link } from "react-router-dom";
import Prices from "./prices";
import { useRef } from "react";
import { notificationApi } from "../../../generic/notification";
import { useGetCoupon } from "../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";

const CardTotal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = notificationApi();
  const { mutate, isLoading } = useGetCoupon();
  const getCoupon = () => {
    const coupon: string = inputRef.current?.value as string;
    if (coupon.trim() === "") {
      notify("not_coupon");
    }
    mutate(coupon);
  };

  return (
    <div className="flex flex-col gap-5">
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>
      <Form onFinish={getCoupon} className="flex h-[40px] mt-[35px]">
        <input
          ref={inputRef}
          name="coupon"
          placeholder="XCDOLMIY"
          className="border w-4/5 border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none font-semibold"
        />
        <button className="bg-[#46A358] flex rounded-md items-center justify-center text-base text-white w-1/5 rounded-r-lg rounded-l-none">
          {isLoading ? <LoadingOutlined /> : <span>Apply</span>}
        </button>
      </Form>
      <Prices />
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px]">
        Proceed To Checkout
      </button>

      <Link to={"/"} className="flex justify-center">
        <button className="mt-[14px] text-[#46A358] cursor-pointer">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;
