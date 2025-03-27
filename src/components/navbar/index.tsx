import { Link, useLocation, useNavigate } from "react-router-dom";

// icons
import logo from "../../assets/icons/logo.svg";
import {
  ArrowDownOutlined,
  BarsOutlined,
  BellOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setModalAuthorizationModalVisibilty } from "../../redux/modalSlice";
import { useState } from "react";
import { cookieInfo } from "../../generic/cookies";
import { Badge } from "antd";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useReduxDispatch();
  const { isAuthorization, getCookie } = cookieInfo();
  const user = getCookie("user");
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.shopSlice);
  //   const user = JSON.parse(localStorage.getItem("user") as string);
  return (
    <header className="flex items-center justify-between max-[530px]:justify-around py-5 border-b border-[#a2d1ab]">
      {/* logo */}
      <Link className="max-[530px]:hidden" to="/">
        <img src={logo} alt="logo" />
      </Link>
      {/* Categories */}
      <div className="flex items-center gap-8 max-[820px]:hidden">
        <h3
          onClick={() => navigate("/")}
          className={`cursor-pointer ${pathname === "/" && "text-[#46a358]"}`}
        >
          Home
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname === "/blogs" && "text-[#46a358]"
          }`}
        >
          Shop
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname === "/blogs" && "text-[#46a358]"
          }`}
        >
          Plant Care
        </h3>
        <h3
          onClick={() => navigate("blog")}
          className={`cursor-pointer ${
            pathname === "/blog" && "text-[#46a358]"
          }`}
        >
          Blog
        </h3>
      </div>
      {/* Btns */}
      <div className="flex items-center  gap-6">
        <SearchOutlined className="text-[25px]" />
        <BellOutlined className="text-[25px]" />
        <div
          onClick={() => navigate("/products-shop")}
          className="cursor-pointer"
        >
          <Badge count={data?.length}>
            <ShoppingCartOutlined className="text-[25px]" />
          </Badge>
        </div>

        {/* Burger/Menu btn */}
        <button
          className=" shadow-[0_10px_20px_0_rgba(70,163,88,0.3)] bg-gradient-to-br
         from-[rgba(70,163,88,0.45)] to-[#46a358] py-1 px-2 rounded-xl cursor-pointer text-white hidden max-[820px]:block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BarsOutlined /> : <BarsOutlined />}
        </button>

        {/* Login */}
        <button
          onClick={() => {
            if (isAuthorization) {
              navigate("/profile");
            } else {
              dispatch(setModalAuthorizationModalVisibilty());
            }
          }}
          className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md flex items-center gap-2 justify-center cursor-pointer max-[400px]:hidden"
        >
          {isAuthorization ? (
            user.name
          ) : (
            <>
              <LoginOutlined />
              Login
            </>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 z-[999] w-full h-screen bg-white p-6 flex flex-col items-center gap-5">
          {/* Logotip */}
          <div className="flex w-[100%] px-4 items-center justify-between border-b pb-3 border-[#a2d1ab]">
            <Link className="" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className=" shadow-[0_10px_20px_0_rgba(70,163,88,0.3)] bg-gradient-to-br
         from-[rgba(70,163,88,0.45)] to-[#46a358] py-1 px-2 rounded-xl cursor-pointer text-white hidden max-[820px]:block"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <BarsOutlined /> : <BarsOutlined />}
            </button>
          </div>
          {/* Categories */}
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-xl   font-semibold">
              <ArrowDownOutlined className="!text-green-800" /> "Categories"
              <ArrowDownOutlined className="!text-green-800" />
            </h1>
            <h3
              className={`cursor-pointer ${
                pathname === "/" && "text-[#46a358]"
              }`}
            >
              Home
            </h3>
            <h3
              className={`cursor-pointer ${
                pathname === "/blogs" && "text-[#46a358]"
              }`}
            >
              Shop
            </h3>
            <h3
              className={`cursor-pointer ${
                pathname === "/blogs" && "text-[#46a358]"
              }`}
            >
              Plant Care
            </h3>
            <h3
              className={`cursor-pointer ${
                pathname === "/blogs" && "text-[#46a358]"
              }`}
            >
              Blogs
            </h3>
          </div>

          {/* Login*/}
          <h1 className="text-xl   font-semibold">
            <ArrowDownOutlined className="!text-green-800" /> "Login"
            <ArrowDownOutlined className="!text-green-800" />
          </h1>
          <button
            onClick={() => dispatch(setModalAuthorizationModalVisibilty())}
            className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md flex items-center gap-2 justify-center cursor-pointer "
          >
            {isAuthorization ? (
              user.name
            ) : (
              <>
                <LoginOutlined />
                Login
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
