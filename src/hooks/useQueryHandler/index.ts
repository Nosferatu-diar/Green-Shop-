import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface UserQueryType {
  pathname: string;
  url: string;
  params?: object;
}

const useQueryHandler = ({ pathname, url, params }: UserQueryType) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }).then((data) => data.data),
  });
};

export default useQueryHandler;
