import { useNavigate, useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQueryHandler";
import {
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { AuthUser, BlogType, QueryType } from "../../../@types";
import { notification } from "antd";
import useLoader from "../../../generic/loader";

const Rendering = () => {
  const { created_by, id } = useParams();

  const {
    data: user,
    isPending: userLoading,
    isError: userError,
  }: QueryType<AuthUser> = useQueryHandler({
    url: `/user/by_id/${created_by}`,
    pathname: `user/${created_by}`,
  });

  const { data, isPending, isError }: QueryType<BlogType> = useQueryHandler({
    url: `/user/blog/${id}`,
    pathname: `blog-${id}`,
  });
  const handleShare = async () => {
    const shareData = {
      title: data?.title,
      text: data?.short_description,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        notification.success({ message: "Sending data" });
      } catch (error) {
        notification.error({ message: "Error data" + error });
      }
    }
  };

  const usersLoading: boolean = userLoading || userError;
  const dataLoading: boolean = isPending || isError;
  const { blog_id_loading } = useLoader();
  const navigate = useNavigate();
  return (
    <section className="w-[90%] m-auto">
      {usersLoading || dataLoading ? (
        blog_id_loading()
      ) : (
        <div>
          <div className="flex  items-center justify-between my-5">
            <div
              onClick={() => navigate(`/user-page/${user?._id}`)}  
              className="flex items-center gap-4 cursor-pointer"
            >
              <img
                src={user?.profile_photo}
                className="W-[50px] h-[50px] rounded-full"
              />
              <div>
                <h3 className="font-semibold max-[400px]:text-sm max-[400px]:text-[12px]">
                  {user?.name} {user?.surname}
                </h3>
                <p className="text-[13px]">
                  Followers {user?.followers?.length}
                </p>
              </div>
            </div>
            <button
              className="bg-[#46A358] flex round-md items-center justify-center gap-1
             text-white px-5 py-2 max-[450px]:px-1 max-[450px]:py-1 max-[450px]:text-sm"
            >
              <PlusCircleOutlined /> Follow
            </button>
          </div>
          <div>
            <h1 className="text-2xl max-[1024px]:text-xl max-[680px]:text-lg my-4 font-bold">
              {data?.title}
            </h1>
            <div
              className="max-[330px]:text-sm"
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
            ></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <EyeOutlined /> <p>{data?.views}</p>
              </div>
              <div className="flex items-center gap-1">
                <HeartOutlined /> <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <MessageOutlined /> <p>0</p>
              </div>
              <div
                onClick={handleShare}
                className="flex items-center gap-1 cursor-pointer"
              >
                <ShareAltOutlined /> <p>0</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rendering;
