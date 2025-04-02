import { useLocation, useNavigate } from "react-router-dom";
import { path_profile } from "../../../utils";

const ProfileHeader = () => {
  const { pathname } = useLocation();
  const pathname_second = pathname.slice(9);
  const navigate = useNavigate();
  const active_style: string =
    "text-[#46a358] border-l-4 border-l-[#46a358] bg-white";
  return (
    <section className="w-[100%] max-[1024px]:flex max-[1024px]:items-center max-[1024px]:justify-center">
      <div className="w-[400px] max-[1024px]:w-[80%]  bg-[#f5f5f5] p-4">
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
    </section>
  );
};

export default ProfileHeader;
