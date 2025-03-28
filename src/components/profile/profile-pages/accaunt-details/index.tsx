import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, UploadProps } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { cookieInfo } from "../../../../generic/cookies";
import type { AuthUser } from "../../../../@types";
import { useEditDetails } from "../../../../hooks/useQueryHandler/useQueryAction";

const AccountDetails: React.FC = () => {
  const { getCookie, setCookie } = cookieInfo();
  const user: AuthUser = getCookie("user");
  const { mutate } = useEditDetails();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const updateDetails = (e: any) => {
    mutate({
      ...e,
      profile_photo: e.profile_photo.file?.response?.image_url?.url,
    });
    setCookie("user", {
      ...user,
      ...e,
      profile_photo: e.profile_photo.file?.response?.image_url?.url,
    });
  };

  const handleUploadChange: UploadProps["onChange"] = ({ fileList }) => {
    setFileList(fileList); // ✅ Updating file list state
  };

  return (
    <div>
      <Form
        onFinish={updateDetails}
        fields={[
          { name: ["name"], value: user?.name },
          { name: ["surname"], value: user?.surname },
          { name: ["email"], value: user?.email },
          { name: ["phone_number"], value: user?.phone_number },
          { name: ["username"], value: user?.username },
        ]}
        layout="vertical"
        className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-5"
      >
        <div>
          <Form.Item
            name="name"
            label="First name"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="surname"
            label="Surname"
            rules={[{ required: true, message: "Please enter surname" }]}
          >
            <Input placeholder="Surname" />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Phone number"
            rules={[{ required: true, message: "Please enter phone number" }]}
          >
            <Input addonBefore="+998" placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            name="profile_photo"
            label="Image"
            rules={[{ required: true, message: "Please enter image" }]}
          >
            <Upload
              fileList={fileList}
              onChange={handleUploadChange}
              name="image"
              data={{ type: "image" }}
              action="https://beckend-n14.onrender.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
              listType="picture"
              headers={{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }}
              accept=".png,.jpg,.jpeg"
              beforeUpload={() => false} // Prevents automatic upload
            >
              <Button type="primary" icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </div>
        <div>
          <button
            className="bg-[#46a358] flex items-center justify-center text-white rounded-md 
          px-5 py-2  cursor-pointer"
          >
            Save changes
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AccountDetails;
