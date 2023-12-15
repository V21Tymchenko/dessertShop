import { FC } from "react";
import navItems from "@/helpers/navItems";
import { navItemsProp } from "@/helpers/navItems";
import {
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList,
} from "./Navigation.styled";

const Navigation: FC = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        {navItems.map(({ href, text }: navItemsProp) => (
          <HeaderNavItem key={href}>
            <HeaderNavLink to={href}>{text}</HeaderNavLink>
          </HeaderNavItem>
        ))}
      </HeaderNavList>
    </HeaderNav>
  );
};
export default Navigation;
