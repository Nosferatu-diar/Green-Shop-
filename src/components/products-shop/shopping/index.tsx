import { Empty } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex item-center justify-between text-start border-b border-[#46A358] pb-3">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%] max-[950px]:hidden">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%] max-[950px]:hidden">
          Total
        </h2>
        <h3 className="max-[950px]:hidden">Delete</h3>
      </div>
      {/* Not  found */}
      {data.length ? (
        data.map((value) => <Card key={value._id} {...value} />)
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 ">
          <Empty />
          <button
            onClick={() => navigate("/")}
            className="bg-[#46A358] text-white px-3 py-1 rounded-md cursor-pointer "
          >
            Go to shop
          </button>
        </div>
      )}

    </div>
  );
};

export default Shopping;
