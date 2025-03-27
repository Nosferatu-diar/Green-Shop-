import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { Input, Form } from "antd";
import { FieldTypeRegisgter } from "../../../../@types";
import {
  useRegisterMutate,
  useRegisterWithGoogle,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";
const Register = () => {
  const { mutate, isPending } = useRegisterMutate();
  const { mutate: registerWithMutate } = useRegisterWithGoogle();
  const register = (e: FieldTypeRegisgter) => {
    mutate(e);
  };
  return (
    <div className="w-[90%] m-auto ">
      <p className="pt-4">Enter your username and password to login.</p>
      <Form
        onFinish={register}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="!mt-5"
      >
        {/* Name input */}
        <Form.Item<FieldTypeRegisgter>
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="name"
          />
        </Form.Item>
        {/* Surname  input*/}
        <Form.Item<FieldTypeRegisgter>
          name="surname"
          rules={[{ required: true, message: "Please enter your surname" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="surname"
          />
        </Form.Item>
        {/* Email  input*/}
        <Form.Item<FieldTypeRegisgter>
          name="email"
          rules={[{ required: true, message: "Please enter your Email" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="Email"
          />
        </Form.Item>
        {/* Password input */}
        <Form.Item<FieldTypeRegisgter>
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="************"
          />
        </Form.Item>
        {/* <h3 className="text-end text-[#46a358] text-[14px]">
          Forgot Password ?
        </h3> */}
        <button
          disabled={isPending}
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-3 text-[18px] opacity-100"
        >
          {isPending ? <LoadingOutlined /> : "Register"}
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[35%] max-[450px]:hidden h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[30%] max-[450px]:w-full text-center text-[#3D3D3D] text-[13px]">
          Or register with
        </p>
        <div className="w-[35%] max-[450px]:hidden h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <button
        onClick={() => registerWithMutate()}
        className="w-full flex items-center h-[40px] rounded-md justify-center border border-[#EAEAEA]  gap-2 mb-3 cursor-pointer"
      >
        <img src={google} alt="google" />
        Register with Google
      </button>
      <button className="w-full flex items-center justify-center h-[40px] border rounded-md border-[#EAEAEA] gap-2 cursor-pointer">
        <img src={facebook} alt="facebook" />
        Register with Facebook
      </button>
    </div>
  );
};

export default Register;
