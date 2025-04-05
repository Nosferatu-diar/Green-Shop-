import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import Loader from "../../../../generic/loader";
import { useParams } from "react-router-dom";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import { BlogTypeApi } from "../../../../@types";
import BlogCard from "../../../blog/card";

const Posts = () => {
  const { getParam } = useSearchParamsHandler();
  const { id } = useParams();

  const { data, isError, isLoading }: BlogTypeApi = useQueryHandler({
    pathname: `blog?search=${getParam("search")}`,
    url: "user/blog",
    params: {
      search: getParam("search") || "",
    },
  });

  const { blog_card_loader } = Loader();

  const user_post = data?.filter((value) => value.created_by === id);

  console.log("Post User ID:", id);
  console.log("Data:", data);
  console.log("Is Error:", isError);
  console.log("Is Loading:", isLoading);

  return (
    <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[630px]:grid-cols-1">
      {isLoading ? (
        blog_card_loader()
      ) : isError ? (
        <p>Error loading posts. Please try again later.</p>
      ) : (
        user_post?.map((value) => <BlogCard key={value._id} {...value} />)
      )}
    </div>
  );
};

export default Posts;
