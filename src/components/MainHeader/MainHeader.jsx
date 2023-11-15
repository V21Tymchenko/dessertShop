import { Link } from "react-router-dom";
import logo from '../../images/лого.svg'

const MainHeader = () => {
  return (
      <header>
        <Link to="/"> <img src={logo} alt="logo" /></Link>
        <input type="text" />
        <Link to="favorite"></Link>
        <div>Корзина</div>
        <a href="instagram">Instagram</a>
        <a href="telegram">Telegram</a>
        <button type="button">UA</button>
        <button type="button">ENG</button>
      </header>
  );
};

export default MainHeader;