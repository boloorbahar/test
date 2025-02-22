import { Menu } from "antd";
import home from "assets/images/home.svg";
import homeFilled from "assets/images/home-filled.svg";
import walletFilled from "assets/images/wallet-filled.svg";
import profileFilled from "assets/images/profile-filled.svg";
import wallet from "assets/images/wallet.svg";
import profile from "assets/images/profile.svg";

const MenuWrapper = ({
  activeMenu,
  handleClickMenu,
  mode,
  className,
  menuItems,
}) => {
  const renderedItems = [
    {
      key: "/profile",
      icon: profile,
      activeIcon: profileFilled,
      label: "Profile",
    },
    {
      key: "/",
      icon: home,
      activeIcon: homeFilled,
      label: "Home",
    },
    {
      key: "/wallet",
      icon: wallet,
      activeIcon: walletFilled,
      label: "Wallet",
    },
  ]?.map(({ label, key, icon, activeIcon, disabled }) => ({
    key,
    icon: (
      <img
        className="h-6 w-6"
        src={activeMenu === key ? activeIcon : icon}
        width="24"
        height="24"
        alt="menu icon"
      />
    ),
    label,
    disabled,
  }));

  return (
    <Menu
      className={className}
      onClick={handleClickMenu}
      selectedKeys={[activeMenu]}
      mode={mode}
      items={renderedItems}
    />
  );
};
export default MenuWrapper;
