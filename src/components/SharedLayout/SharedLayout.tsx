import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@/components/Container";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import Spinner from "../Spinner/Spinner";

const SharedLayout: FC = () => {
  return (
    <>
      <Container>
        <MainHeader>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </MainHeader>
        <main>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default SharedLayout;
