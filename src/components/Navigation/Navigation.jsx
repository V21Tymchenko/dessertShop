import navItems from "@/helpers/navItems";
import {
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <HeaderNav>
      <HeaderNavList>
        {navItems.map(({ href, text }) => (
          <HeaderNavItem key={href}>
            <HeaderNavLink to={href}>{text}</HeaderNavLink>
          </HeaderNavItem>
        ))}
      </HeaderNavList>
    </HeaderNav>
  );
};
export default Navigation;
