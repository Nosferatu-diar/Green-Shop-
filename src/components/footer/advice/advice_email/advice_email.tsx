import { Form, Input } from "antd";
import { useSendEmail } from "../../../../hooks/useQueryHandler/useQueryAction";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

const AdvcieEmail = () => {
  const { mutate, isLoading, isSuccess } = useSendEmail();
  const submit = (e: { email: string }) => {
    mutate(e);
  };
  return (
    <div>
      {/* Title Section */}
      <h1 className="font-bold text-[18px] mt-2">
        Would you like to join newsletters?
      </h1>

      {/* Form Section */}
      <Form onFinish={submit} className="!flex !mt-5 ">
        <Form.Item
          name="email"
          className="w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Enter your email address..."
            className="h-[40px]"
          />
        </Form.Item>
        <Form.Item>
          <button
            disabled={isSuccess}
            className="bg-[#46A358] flex items-center justify-center gap-1 text-base text-white h-[40px] px-4 rounded-r-md cursor-pointer rounded-nc"
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : isSuccess ? (
              <CheckOutlined />
            ) : (
              "Join"
            )}
          </button>
        </Form.Item>
      </Form>

      {/* Description Section */}
      <p className="text-[13px] leading-6 text-[#727272] font-normal mt-2">
        We usually post offers and challenges in newsletters. We're your online
        houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  );
};

export default AdvcieEmail;
