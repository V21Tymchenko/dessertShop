import { Link } from "react-router-dom"
import navItems from "../../helpers/navItems";


const Navigation = () => {
  return (<header><nav><ul>{navItems.map(({ href, text }) => (
    <li key={href}><Link to={href}>{text}</Link></li>
    ))}</ul></nav>
    </header>)
};
export default Navigation;