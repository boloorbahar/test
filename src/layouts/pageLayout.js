import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const PageLayout = () => {

  return (
    <Layout className=" items-center bg-gradient-to-bl from-[#1E0E35] to-[#070B16] max-w-lg mx-auto ">
      <Layout className=" w-full max-w-lg mt-4  bg-transparent">
        <Content
          id="scrollableDiv"
          className={`h-screen overflow-y-auto overflow-x-hidden  pb-48`}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
