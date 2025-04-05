import { useParams } from "react-router-dom";
import bgImg from "../../../assets/imgs/banner.jpg";
import { Avatar, Button, Skeleton } from "antd";
import {
  MessageOutlined,
  PlusCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import UserDetails from "../user-details";
import useQueryHandler from "../../../hooks/useQueryHandler";

const UserPageHero = () => {
  const param = useParams();
  const user_id = param.id;

  const { data, isError, isPending } = useQueryHandler({
    url: `user/by_id/${user_id}`,
    pathname: "user-info",
  });

  return (
    <div className="py-5">
      <div className="containerr ">
        <div>
          <img
            src={bgImg}
            className=" w-full min-h-[200px] object-cover"
            alt=""
          />
          {isPending || isError ? (
            <div className="flex items-end justify-between mt-5">
              <div className="flex gap-3 items-end">
                <Skeleton.Avatar />
                <div>
                  <Skeleton.Button />
                  <Skeleton.Button />
                </div>
              </div>
              <div className="flex gap-3">
                <Skeleton.Button />
                <Skeleton.Button />
                <Skeleton.Button />
              </div>
            </div>
          ) : (
            <div className="flex justify-between flex-wrap gap-3 px-5 sm:mt-[-50px] items-end">
              <div className="flex gap-2 items-center sm:items-end mt-20">
                <Avatar
                  className="!min-w-[40px] !min-h-[40px]  !max-w-[100px] !w-full !h-full !max-h-[100px]"
                  src={data?.profile_photo}
                  alt="img"
                />
                <div>
                  <h3 className="font-bold text-[18px]">
                    {data?.name} {data?.surname}
                  </h3>
                  <p>Followers {data?.followers.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button className="!bg-[#45a358] text-white" type="primary">
                  <MessageOutlined />
                  <p className="hidden sm:block">Start Chat</p>
                </Button>
                <Button className="!bg-[#45a358] text-white" type="primary">
                  <SendOutlined />
                  <p className="hidden sm:block">Send Invitation</p>
                </Button>
                <Button className="!bg-[#45a358] text-white" type="primary">
                  <PlusCircleOutlined />
                  <p className="hidden sm:block">Follow</p>
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 ">
          <UserDetails userData={data} />
        </div>
      </div>
    </div>
  );
};

export default UserPageHero;
