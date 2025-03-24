import google from "../../../../assets/icons/google.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { Input, Form } from "antd";
import { FieldType } from "../../../../@types";
import {
  useLoginMutate,
  useLoginWithGoogle,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";
const Login = () => {
  const { mutate } = useLoginMutate();
  const isLoading = false; // or handle loading state appropriately
  const { mutate: loginWithMutate } = useLoginWithGoogle();
  const login = (e: FieldType) => {
    mutate(e);
  };
  return (
    <div className="w-[90%] m-auto ">
      <p className="pt-4">Enter your username and password to login.</p>
      <Form
        onFinish={login}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="!mt-5"
      >
        {/* Email input */}
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="davron_raimonov4446@mail.ru"
          />
        </Form.Item>
        {/* Password input */}
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="************"
          />
        </Form.Item>
        <h3 className="text-end text-[#46a358] text-[14px]">
          Forgot Password ?
        </h3>
        <button
          disabled={isLoading}
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-3 text-[18px] opacity-100"
        >
          {isLoading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[35%] max-[400px]:hidden h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[30%] max-[400px]:w-full text-center text-[#3D3D3D] text-[13px]">
          Or login with
        </p>
        <div className="w-[35%] max-[400px]:hidden h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <button
        onClick={() => loginWithMutate()}
        className="w-full flex items-center h-[40px] rounded-md justify-center border border-[#EAEAEA]  gap-2 mb-3 cursor-pointer"
      >
        <img src={google} alt="google" />
        Login with Google
      </button>
      <button className="w-full flex items-center justify-center h-[40px] border rounded-md border-[#EAEAEA] gap-2 cursor-pointer">
        <img src={facebook} alt="facebook" />
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
