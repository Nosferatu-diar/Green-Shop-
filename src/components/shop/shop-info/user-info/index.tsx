import { Avatar, Skeleton, Tooltip } from "antd";
import { AuthUser, QueryType } from "../../../../@types";
import useQueryHandler from "../../../../hooks/useQueryHandler";

const UserInfo = (props: { id?: string }) => {
  const { data, isLoading, isError }: QueryType<AuthUser> = useQueryHandler({
    pathname: "userinfo",
    url: `user/by_id/${props.id}`,
  });

  return (
    <div>
      {isLoading || isError ? (
        <Skeleton.Avatar className="!w-[75px] !h-[75px]" />
      ) : (
        <Tooltip
          title={`${data?.name} ${data?.surname}`}
          className="cursor-pointer"
        >
          <Avatar src={data?.profile_photo} className="!w-[75px] !h-[75px]" />
        </Tooltip>
      )}
    </div>
  );
};

export default UserInfo;
