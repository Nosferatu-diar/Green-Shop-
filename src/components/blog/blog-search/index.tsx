import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Form } from "react-router-dom";

const BlogSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold my-4">My Feed</h1>
      <Form className="flex w-full items-center justify-center">
        <Input
          placeholder="input search text"
          className="!w-[55%] !rounded-r-none"
        ></Input>
        <Button className="!rounded-l-none " type="primary">
          <SearchOutlined className="text-lg" />
        </Button>
      </Form>
    </div>
  );
};

export default BlogSearch;
