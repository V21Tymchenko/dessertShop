import navItems from "@/helpers/navItems";
import {
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <header>
      <nav>
        <HeaderNavList>
          {navItems.map(({ href, text }) => (
            <HeaderNavItem key={href}>
              <HeaderNavLink to={href}>{text}</HeaderNavLink>
            </HeaderNavItem>
          ))}
        </HeaderNavList>
      </nav>
    </header>
  );
};
export default Navigation;
