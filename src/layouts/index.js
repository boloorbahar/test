import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterWrapper from "./footer";

const { Content } = Layout;

const DefaultLayout = () => {
  const navigate = useNavigate();
  const activeMenu = useSelector((state) => state?.routerReducer?.activeMenu);

  const handleClickMenu = async (e) => {
    navigate(e.key);
  };

  return (
    <Layout className=" items-center bg-gradient-to-bl from-[#1E0E35] to-[#070B16] max-w-lg mx-auto ">
      <Layout className=" w-full max-w-lg mt-4  bg-transparent">
        <Content
          id="scrollableDiv"
          className={`h-screen overflow-y-auto overflow-x-hidden  pb-48 !rounded-xl `}
        >
          <Outlet />
        </Content>
      </Layout>
      <FooterWrapper
        activeMenu={activeMenu}
        handleClickMenu={handleClickMenu}
      />
    </Layout>
  );
};
export default DefaultLayout;
