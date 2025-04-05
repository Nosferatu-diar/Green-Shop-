import { useEffect, useState } from "react";
import { Empty } from "antd";
import { useParams } from "react-router-dom";
import { useAxios } from "../../../../hooks/useAxios";
import Loader from "../../../../generic/loader";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import FollowersCard from "./followersCard";
import { useRef } from "react";
import { IUser } from "../../../../@types";

const Followers = () => {
  const { id } = useParams<{ id: string }>();
  const { category_loader } = Loader();

  const {
    data,
    isError: isFollowersError,
    isLoading: isFollowersLoading,
  } = useQueryHandler({
    pathname: "user-followers",
    url: `user/by_id/${id}`,
  });

  const [error, setError] = useState<string | null>(null);

  const [followers, setFollowers] = useState<IUser[]>([]);

  const axios = useAxios();

  // tashqariga
  const prevFollowerIdsRef = useRef<string[]>([]);

  useEffect(() => {
    const currentIds = data?.followers || [];

    // deep equality check — agar bir xil bo‘lsa, hech narsa qilmaymiz
    if (
      currentIds.length === prevFollowerIdsRef.current.length &&
      currentIds.every(
        (id: string, idx: number) => id === prevFollowerIdsRef.current[idx]
      )
    ) {
      return;
    }

    prevFollowerIdsRef.current = currentIds;

    if (!currentIds.length) return;

    Promise.all(
      currentIds.map((id: string) =>
        axios({ url: `user/by_id/${id}` })
          .then((res) => res.data)
          .catch(() => {
            setError("Failed to load some followers");
            return null;
          })
      )
    )
      .then((results: IUser[]) => {
        console.log(results);

        setFollowers(results.filter(Boolean));
      })
      .catch(() => {
        setError("Failed to load followers");
        setFollowers([]);
      });
  }, [data?.followers, axios]);

  if (isFollowersLoading) {
    return (
      <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
        {category_loader()}
      </div>
    );
  }

  if (isFollowersError || error) {
    return (
      <div className="p-4">
        <Empty description="Failed to load followers" />
      </div>
    );
  }

  if (!followers.length) {
    return (
      <div className="p-4">
        <Empty description="No followers yet" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
      {followers?.map(
        (user: {
          _id: string;
          name: string;
          surname: string;
          profile_photo?: string;
        }) => (
          <FollowersCard key={user._id} {...user} />
        )
      )}
    </div>
  );
};

export default Followers;
