import { Outlet } from "react-router-dom";
import Container from "@/components/Container";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

const SharedLayout = () => {
  return (
    <>
      <Container>
        <MainHeader>
          <Outlet />
        </MainHeader>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default SharedLayout;
