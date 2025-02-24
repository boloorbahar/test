import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import arrow from "assets/images/arrow-right.svg";

const { Content } = Layout;

const PageLayout = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate(-1);
  };

  return (
    <Layout className=" items-center bg-gradient-to-bl from-[#1E0E35] to-[#070B16] max-w-lg mx-auto ">
      <img
        src={arrow}
        className="rotate-180 self-start w-10 m-5"
        onClick={() => goBack()}
      />
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
