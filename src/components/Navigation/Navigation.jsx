import navItems from "@/helpers/navItems";
import {
  Header,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <Header>
      <nav>
        <HeaderNavList>
          {navItems.map(({ href, text }) => (
            <HeaderNavItem key={href}>
              <HeaderNavLink to={href}>{text}</HeaderNavLink>
            </HeaderNavItem>
          ))}
        </HeaderNavList>
      </nav>
    </Header>
  );
};
export default Navigation;
