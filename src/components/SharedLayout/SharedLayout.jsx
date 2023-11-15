import { Link, Outlet } from 'react-router-dom';
import navItems from '../../helpers/navItems';
import MainHeader from './SharedLayout';


const SharedLayout = () => {
  return (
    <>
      <MainHeader/>
      <header>{navItems.map(({href, text}) => (
        <Link to={href} key={href}>{text}</Link>
      ))}</header>
      <main> <Outlet /></main>

    </>
  );
};

export default SharedLayout;