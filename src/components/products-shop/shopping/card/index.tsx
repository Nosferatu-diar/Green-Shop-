import { FC } from "react";
import { CartTypeData } from "../../../../@types";
import { DeleteFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { counterEdited, deleteData } from "../../../../redux/shopSlice";
import { notificationApi } from "../../../../generic/notification";

const Card: FC<CartTypeData> = (props) => {
  const dispatch = useReduxDispatch();
  const notify = notificationApi();

  const { main_image, title, _id, price, userPrice, counter } = props;
  const findCount = counter == 0;
  if (findCount) {
    dispatch(deleteData(_id));
  }

  return (
    <section>
      <div className="my-5 mt-7 bg-[#eee] p-2 flex items-center justify-between rounded-sm">
        {/* Image and title */}
        <div className="flex items-center gap-4 w-[40%]">
          <img className="w-[70px] h-[70px]" src={main_image} alt="img" />
          <div>
            <h3 className="text-[16px] font-medium">{title}</h3>
            <p className="text-[14px] font-normal pt-[10px] max-sm:text-[12px]">
              <span className="text-[#A5A5A5]">SKU:</span> {_id}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="text-[#727272] text-[16px] font-medium w-[20%]">
          ${price}
        </div>

        {/* Quantity / Incre-Derce*/}
        <div className="flex items-center gap-3 w-[20%] max-[950px]:hidden">
          <button
            onClick={() =>
              dispatch(counterEdited({ type: "decrement", id: _id }))
            }
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full cursor-pointer text-white"
          >
            -
          </button>
          <span className="text-[17px]">{counter}</span>
          <button
            onClick={() =>
              dispatch(counterEdited({ type: "increment", id: _id }))
            }
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full cursor-pointer text-white"
          >
            +
          </button>
        </div>

        {/* Total price */}
        <div className="text-[#727272] text-[16px] font-medium w-[20%] max-[950px]:hidden">
          ${Number(userPrice).toFixed(2)}
        </div>

        {/* Delete */}
        <DeleteFilled
          onClick={() => {
            dispatch(deleteData(_id));
            notify("delete_data");
          }}
          className="text-[#727272] text-[20px] cursor-pointer max-[950px]:!hidden"
        />
      </div>
      {/* responsive */}
      <div className="hidden max-[950px]:flex bg-[#eee] p-2  items-center justify-between rounded-sm">
        {/* Quantity / Incre-Derce*/}
        <div className="flex items-center gap-3 w-[20%] ">
          <button
            onClick={() =>
              dispatch(counterEdited({ type: "decrement", id: _id }))
            }
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full cursor-pointer text-white"
          >
            -
          </button>
          <span className="text-[17px]">{counter}</span>
          <button
            onClick={() =>
              dispatch(counterEdited({ type: "increment", id: _id }))
            }
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full cursor-pointer text-white"
          >
            +
          </button>
        </div>

        {/* Total price */}
        <div className="text-[#727272] text-[16px] font-medium w-[20%] ">
          ${Number(userPrice).toFixed(2)}
        </div>

        {/* Delete */}
        <DeleteFilled
          onClick={() => {
            dispatch(deleteData(_id));
            notify("delete_data");
          }}
          className="text-[#727272] text-[20px] cursor-pointer "
        />
      </div>
      {/* responsive */}
      <div className="hidden max-[950px]:flex item-center justify-between text-start border-b border-[#46A358] py-1">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%] ">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%] ">
          Total
        </h2>
        <h3 className="">Delete</h3>
      </div>
    </section>
  );
};

export default Card;
