import { Link } from "react-router-dom"
import navItems from "../../helpers/navItems"

const Navigation = () => {
  return (<header><nav>{navItems.map(({ href, text }) => (
        <Link to={href} key={href}>{text}</Link>
    ))}</nav>
    </header>)
};
export default Navigation;