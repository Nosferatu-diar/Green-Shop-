import { useState } from "react";
import { profile_tab_items } from "../../../utils";

const UserDetails = ({ userData }: any) => {
  const [activeTab, setActiveTab] = useState("1"); // 🔹 Default "About"

  return (
    <div>
      <div className="flex gap-4 border-b pb-2">
        {profile_tab_items?.map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-1 cursor-pointer rounded-md ${
              activeTab === key ? "bg-[#45a358]  text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {profile_tab_items?.map(({ key, Components }: any) =>
          activeTab === key ? (
            <Components key={key} userData={userData} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default UserDetails;
