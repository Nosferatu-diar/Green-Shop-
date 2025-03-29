import { BlogType, QueryType } from "../../@types";
import { cookieInfo } from "../../generic/cookies";
import useLoader from "../../generic/loader";
import useQueryHandler from "../../hooks/useQueryHandler";
import BlogHeader from "./blog-header";
import BlogSearch from "./blog-search";
import BlogCard from "./card";

const BlogComponent = () => {
  const { isAuthorization } = cookieInfo();
  const { data, isPending, isError }: QueryType<BlogType[]> = useQueryHandler({
    url: "user/blog",
    pathname: "blog",
    params: {
      search: "",
    },
  });
  const { blog_card_loader } = useLoader();

  return (
    <section className="">
      {isAuthorization ? <BlogSearch /> : <BlogHeader />}
      <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[655px]:grid-cols-1 gap-5 my-5">
        {isPending || isError
          ? blog_card_loader()
          : data?.map((value) => <BlogCard key={value._id} {...value} />)}
      </div>
    </section>
  );
};

export default BlogComponent;
