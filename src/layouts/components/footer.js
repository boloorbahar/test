import { Layout } from "antd";
import MenuWrapper from "./menu";

const FooterWrapper = ({ handleClickMenu, activeMenu }) => {
  const { Footer } = Layout;

  return (
    <Footer className="h-20 p-0 fixed bottom-0 bg-[#0F0F0F]  w-full max-w-lg ">
      <MenuWrapper
        className="bg-transparent  "
        handleClickMenu={handleClickMenu}
        activeMenu={activeMenu}
        mode="horizontal"
      />
    </Footer>
  );
};
export default FooterWrapper;
