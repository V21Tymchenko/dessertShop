import { Outlet } from "react-router-dom";
import Container from "@/components/Container";
import MainHeader from "@/components/MainHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Container>
        <MainHeader />
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default SharedLayout;
