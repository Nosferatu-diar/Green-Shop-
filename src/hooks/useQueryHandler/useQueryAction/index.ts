import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAuthorizationModalVisibilty } from "../../../redux/modalSlice";
import { notificationApi } from "../../../generic/notification";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { signInWithGoogle } from "../../../config";

// login
export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const signIn = useSignIn();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      signIn({
        auth: {
          token,
          type: "Bearer",
        },
        userState: {
          ...user,
        },
      });
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

  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log("useMutation onSuccess data :", data);
      const { token, user } = data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
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
      localStorage.setItem("user", JSON.stringify(user));
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
      localStorage.setItem("user", JSON.stringify(user));
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
