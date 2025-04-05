import { useLocation, useNavigate } from "react-router-dom";
import { path_profile } from "../../../utils";
import { LogoutOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
const ProfileHeader = () => {
  const { pathname } = useLocation();
  const pathname_second = pathname.slice(9);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
      localStorage.removeItem("token");
    navigate("/");
  };

  const active_style: string =
    "text-[#46a358] border-l-4 border-l-[#46a358] bg-white ";
  return (
    <section className="w-[100%] max-[1024px]:flex max-[1024px]:items-center max-[1024px]:justify-center">
      <div className="w-[400px] max-[1024px]:w-[80%]  bg-[#f5f5f5] p-4 border-b-2 border-[#46a358]">
        <h1 className="font-bold text-[18px]">My Account</h1>
        {path_profile.map(({ Icon, id, title, path }) => (
          <div
            onClick={() => navigate(`/profile/${path}`)}
            key={id}
            className={`flex items-center gap-2 mt-2 py-2 pl-2 text-[19px] cursor-pointer hover:text-[#46a358] border-l-4 hover:border-l-[#46a358] hover:bg-white border-l-transparent ${
              path === pathname_second && active_style
            }`}
          >
            <Icon />
            <h3 className="text-[17px]">{title}</h3>
          </div>
        ))}
      </div>

      <div
        onClick={handleLogout}
        className="flex  text-red-500 gap-3 items-center pl-7 mt-5 cursor-pointer border py-2 rounded-lg hover:bg-[#f5f5f5]"
      >
        <LogoutOutlined />
        <button className="cursor-pointer"> Log Out</button>
      </div>
    </section>
  );
};

export default ProfileHeader;
