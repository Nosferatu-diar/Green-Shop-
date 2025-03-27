import { Form, Input, Radio } from "antd";
import { cookieInfo } from "../../../generic/cookies";
import { useDispatch } from "react-redux";
import { setModalAuthorizationModalVisibilty } from "../../../redux/modalSlice";
import { AuthUser, MakeOrderType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useMakeOrderList } from "../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";

const ProcedForm = () => {
  const radio_style: string =
    "border ant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item border-[#46A358] w-full h-[40px] flex items-center  pl-3 rounded-lg css-k7429zer";
  const { isAuthorization, getCookie } = cookieInfo();
  const user: AuthUser = getCookie("user");
  const dispatch = useDispatch();

  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;
  const { mutate, isPending } = useMakeOrderList();
  const order = (e: MakeOrderType) => {
    const makeOrder = {
      shop_list: data,
      billing_address: e,
      extra_shop_info: {
        method: e.payment_method,
        total,
      },
    };
    mutate(makeOrder);
  };

  return (
    <section>
      <Form
        onFinish={order}
        fields={[
          { name: ["name"], value: user?.name || "" },
          { name: ["surname"], value: user?.surname || "" },
          { name: ["country"], value: user?.billing_address?.country || "" },
          {
            name: ["street"],
            value: user?.billing_address?.street_address || "",
          },
          { name: ["state"], value: user?.billing_address?.state || "" },
          { name: ["email"], value: user?.email || "" },
          { name: ["zip"], value: user?.billing_address?.zip || "" },
          {
            name: ["appartment"],
            value: user?.billing_address?.additional_street_address || "",
          },
          { name: ["town"], value: user?.billing_address?.town || "" },
          { name: ["phone_number"], value: user?.phone_number || "" },
        ]}
        layout="vertical"
      >
        <div className="grid grid-cols-2 max-[450px]:grid-cols-1 gap-5">
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Type your first name..." />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your country..." />
            </Form.Item>
            <Form.Item
              name="street"
              label="Street Address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your street address..." />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input placeholder="Type your state..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your email..." />
            </Form.Item>

            {/* radio */}
            <Form.Item
              className="max-[450px]:hidden"
              name="payment_method"
              label="Payment Method"
              rules={[
                {
                  required: true,
                  message: "Please enter Payment Method",
                },
              ]}
            >
              <Radio.Group className="!flex !flex-col !gap-3">
                <Radio
                  className={`${radio_style} `}
                  value="other-payment-methods"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-..."
                    alt="img"
                    className="ml-2 mt-2"
                  />
                </Radio>
                <Radio className={radio_style} value="dorect-bank-transfer">
                  Dorect bank transfer
                </Radio>
                <Radio className={radio_style} value="cash-on-delivery">
                  Cash on delivery
                </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="last_name"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your last name..." />
            </Form.Item>
            <Form.Item
              name="town"
              label="Country / City"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your town..." />
            </Form.Item>
            <Form.Item name="Appartment" label=" " rules={[{ required: true }]}>
              <Input placeholder="Type your street appartment..." />
            </Form.Item>
            <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
              <Input placeholder="Type your zip..." />
            </Form.Item>
            <Form.Item
              name="phone_number"
              label="Phone number"
              rules={[{ required: true }]}
            >
              <Input
                addonBefore="+998"
                placeholder="Type your phone number..."
              />
            </Form.Item>
          </div>
        </div>
        {/* radio/ responsive */}
        <Form.Item
          className="max-[450px]:block hidden"
          name="payment_method"
          label="Payment Method"
          rules={[
            {
              required: true,
              message: "Please enter Payment Method",
            },
          ]}
        >
          <Radio.Group className="!flex !flex-col !gap-3">
            <Radio className={`${radio_style} `} value="other-payment-methods">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-..."
                alt="img"
                className="ml-2 mt-2"
              />
            </Radio>
            <Radio className={radio_style} value="dorect-bank-transfer">
              Dorect bank transfer
            </Radio>
            <Radio className={radio_style} value="cash-on-delivery">
              Cash on delivery
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please enter comment" }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <button
          onClick={() => {
            if (!isAuthorization) {
              dispatch(setModalAuthorizationModalVisibilty());
            }
          }}
          className="bg-[#46A358] rounded-md px-7 py-2  cursor-pointer text-white"
        >
          {isPending ? <LoadingOutlined /> : "Palec order"}
        </button>
      </Form>
    </section>
  );
};

export default ProcedForm;
