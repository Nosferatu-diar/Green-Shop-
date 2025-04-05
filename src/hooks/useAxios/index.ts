// filepath: c:\Users\dilmu\OneDrive\Desktop\GreenShop\src\hooks\useAxios\index.ts
import axios from "axios";

interface RequestType {
  method?: "GET" | "DELETE" | "PUT" | "POST";
  body?: object;
  url: string;
  params?: object;
  headers?: object;
}

export const useAxios = () => {
  const request = ({
    method = "GET",
    url,
    params,
    headers,
    body,
  }: RequestType) => {
    const fullUrl = `${import.meta.env.VITE_BASE_URL}/${url}`;
    console.log(`Requesting URL: ${fullUrl}`);
    return axios({
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
    }).then((data) => data.data);
  };
  return request;
};
