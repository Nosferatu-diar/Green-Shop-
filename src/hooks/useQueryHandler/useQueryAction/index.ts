import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import {
  setModalAuthorizationModalVisibilty,
  setOrderModalVisibilty,
} from "../../../redux/modalSlice";
import { notificationApi } from "../../../generic/notification";
import { signInWithGoogle } from "../../../config";
import { cookieInfo } from "../../../generic/cookies";
import { getCoupon } from "../../../redux/shopSlice";
import { OrderType } from "../../../@types";

// login
export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      // localStorage.setItem("user", JSON.stringify(user));
      notify("login");
      dispatch(setModalAuthorizationModalVisibilty());
    },
  });
};

// Register
export const useRegisterMutate = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log("useMutation onSuccess data :", data);
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      // localStorage.setItem("user", JSON.stringify(user));
      notify("register");
      dispatch(setModalAuthorizationModalVisibilty());
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// login with google
export const useLoginWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      // localStorage.setItem("user", JSON.stringify(user));
      notify("login_google");
      dispatch(setModalAuthorizationModalVisibilty());
    },
  });
};

// register with google
export const useRegisterWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();

  return useMutation({
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
      // localStorage.setItem("user", JSON.stringify(user));
      notify("login_google");
      dispatch(setModalAuthorizationModalVisibilty());
    },
    onError: (error: { status: number }) => {
      if (error.status == 406) {
        notify(406);
      }
    },
  });
};

// end emal
export const useSendEmail = () => {
  const axios = useAxios();
  const notify = notificationApi();
  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "features/email-subscribe",
        method: "POST",
        body: data,
      }),
    onSuccess: () => {
      notify("send_email");
    },
  });
};

// get Coupon
export const useGetCoupon = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (coupon_code: string) =>
      axios({ url: "features/coupon", params: { coupon_code } }),
    onSuccess: (data) => {
      dispatch(getCoupon(Number(data.data.discount_for)));
      notify("coupon");
    },
    onError: () => {
      notify("404_coupon");
    },
  });
};

//
export const useMakeOrderList = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "order/make-order", method: "POST", body: data });
    },
    onSuccess: () => {
      dispatch(setOrderModalVisibilty());
    },
  });
};

//
export const useEditDetails = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      // updateCookiesUser(data);
      return axios({ url: "user/account-details", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("detailes");
    },
  });
};

//
export const useEditAdress = () => {
  const axios = useAxios();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) => {
      return axios({ url: "user/address", method: "POST", body: data });
    },
    onSuccess: () => {
      notify("address");
    },
  });
};

const useDeleteOrderCache = () => {
  const queryClient = useQueryClient();
  return ({ _id }: { _id: string }) => {
    queryClient.setQueryData(
      "order-list",
      (oldData: OrderType[] | undefined) => {
        if (oldData) {
          return oldData?.filter((value) => value._id !== _id) || [];
        } else {
          return [];
        }
      }
    );
  };
};

export const useDeleteOrder = () => {
  const axios = useAxios();
  const deleteOrderCache = useDeleteOrderCache();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: { _id: string }) => {
      deleteOrderCache(data);
      return axios({
        url: "order/delete-order",
        method: "DELETE",
        body: data,
      });
    },
    onSuccess: () => {
      notify("order");
    },
  });
};
