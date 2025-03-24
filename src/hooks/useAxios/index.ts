import axios from "axios";

interface RequestType {
  method?: "GET" | "DELETE" | "PUT" | "POST";
  body?: object;
  url: string;
  params?: object;
  headers?: object;
}

export const useAxios = () => {
  const request = async ({
    method = "GET",
    url,
    params,
    headers,
    body,
  }: RequestType) => {
    // URL ni to‘g‘ri formatlash
    const baseUrl = import.meta.env.VITE_BASE_URL?.replace(/\/$/, "") || "";
    const endpoint = url.replace(/^\//, "");
    const fullUrl = `${baseUrl}/${endpoint}`;

    console.log(`🔍 Requesting URL:`, fullUrl);

    try {
      const response = await axios({
        url: fullUrl,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ...headers,
        },
        params: {
          access_token: "64bebc1e2c6d3f056a8c85b7",
          ...params,
        },
      });

      return response.data;
    } catch (error) {
      console.error("🚨 Axios error:", error);
      return Promise.reject(error);
    }
  };

  return request;
};
