import "@ant-design/v5-patch-for-react-19";
import { notification } from "antd";
type NotificationApiType =
  | "login"
  | "register"
  | "login_google"
  | 406
  | "send_email"
  | "add_data"
  | "delete_data"
  | "not_coupon"
  | "404_coupon"
  | "coupon"
  | "address"
  | "detailes"
  | "order";

export const notificationApi = () => {
  const notify = (type: NotificationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successful" });
      case "register":
        return notification.success({ message: "Register successful" });
      case 406:
        return notification.error({ message: "Emal already exist" });
      case "send_email":
        return notification.success({
          message: "Emal successfully added to our daily newslatters",
        });
      case "login_google":
        return notification.success({
          message: "Login With Google successful",
        });
      case "add_data":
        return notification.success({
          message: "Added to cart successfully",
        });
      case "delete_data":
        return notification.success({
          message: "Deleted from cart successfully",
        });
      case "not_coupon":
        return notification.error({
          message: "Please enter a coupon code",
        });
      case "404_coupon":
        return notification.error({
          message: "Please enter a valid coupon code",
        });
      case "coupon":
        return notification.success({
          message: "Coupon successfully added",
        });
      case "address":
        return notification.success({
          message: "Address edited successfully",
        });
      case "detailes":
        return notification.success({
          message: "Detailes edited successfully",
        });
      case "order":
        return notification.success({
          message: "Oredr deleted",
        });
      default:
        break;
    }
  };
  return notify;
};
