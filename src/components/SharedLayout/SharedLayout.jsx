import { Outlet } from "react-router-dom";
import Container from "@/components/Container/Container";
import MainHeader from "@//components/MainHeader/MainHeader";
import Navigation from "@//components/Navigation/Navigation";



const SharedLayout = () => {
  return (
    <Container>
      <MainHeader/>
      <Navigation />
      <main>
        <Outlet />
      </main> 
    </Container>
  );
};

export default SharedLayout;
