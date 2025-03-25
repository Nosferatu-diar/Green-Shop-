import "@ant-design/v5-patch-for-react-19";
import { notification } from "antd";
type NotificationApiType = "login" | "register" | "login_google" | 406;

export const notificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successful" });
      case "register":
        return notification.success({ message: "Register successful" });
      case 406:
        return notification.error({ message: "Emal already exist" });
      case "login_google":
        return notification.success({
          message: "Login With Google successful",
        });
      default:
        break;
    }
  };
  return notify;
};
