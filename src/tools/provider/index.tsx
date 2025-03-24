import { FC } from "react";
import { ComponentType } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store as store2 } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "http:",
});
const queryClient = new QueryClient();

const ProviderConf: FC<ComponentType> = ({ children }) => {
  return (
    <Provider store={store2}>
      <AuthProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Modals />
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  );
};

export default ProviderConf;
