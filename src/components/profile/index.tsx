import { Outlet } from "react-router-dom";
import ProfileHeader from "./profile-header";

const ProfileComponent = () => {
  return (
    <section className="flex max-[1024px]:grid grid-cols-1   gap-5 mt-10">
      <div>
        <ProfileHeader />
      </div>
      <div className="w-full m-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfileComponent;
