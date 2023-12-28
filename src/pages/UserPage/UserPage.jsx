import {
  UserPageImage,
  UserPageMainNavBox,
  UserPageMainNavLink,
  UserPageMainNavLinkActive,
  UserPageNavLink,
  UserPageNavLinkBox,
  UserPageSection,
} from "./UserPage.styled";
import { BiUser } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import theme from "@/helpers/styles/theme";
import { Outlet } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <UserPageImage src="/src/assets/images/user/userAccount.jpg" alt="test" />
      <UserPageMainNavBox>
        <UserPageMainNavLink to="/">Головна</UserPageMainNavLink>
        <span>/</span>
        <UserPageMainNavLinkActive to="user">
          Особистий кабінет
        </UserPageMainNavLinkActive>
      </UserPageMainNavBox>
      <UserPageSection>
        <UserPageNavLinkBox>
          <UserPageNavLink to="/user/personalData">
            <BiUser color={theme.colors.text} size="24px" />
            Особисті дані
          </UserPageNavLink>
          <UserPageNavLink to="/user/myOrders">
            <RiFileList2Line color={theme.colors.text} size="24px" />
            Мої замовлення
          </UserPageNavLink>
          <UserPageNavLink to="/user/wishList">
            <FaRegHeart color={theme.colors.text} size="24px" />
            Список бажань
          </UserPageNavLink>
        </UserPageNavLinkBox>
        <Outlet />
      </UserPageSection>
    </>
  );
};

export default UserPage;
