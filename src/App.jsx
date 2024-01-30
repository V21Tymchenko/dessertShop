import { Route, Routes } from "react-router-dom";
import SharedLayout from "@/components/SharedLayout";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import ConfirmationPage from "./pages/ConfirmPage";
import CakesByIdRender from "./components/CatalogReusedComponents/CakesByIdRender";
import CakesCatalogPage from "./pages/CakesCatalogPage";
import CakesTypePage from "./pages/CakesTypePage";
import BentoTypePage from "./pages/BentoTypePage";
import MacaroonTypePage from "./pages/MacaroonTypePage";
import TartsTypePage from "./pages/TartsTypePage";
import UserPage from "./pages/UserPage";
import PersonalData from "./components/UserData/PersonalData/PersonalData";
import MyOrders from "./components/UserData/MyOrders/MyOrders";
import WishList from "./components/UserData/WishList/WishList";
import AboutPage from "./pages/AboutPage/AboutPage";
import CooperationPage from "./pages/CooperationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CakesCatalogPage />} />
          <Route path="constructor" element={<div>CONSTRUCTOR</div>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="delivery" element={<div>DELIVERY</div>} />
          <Route path="cooperation" element={<CooperationPage />} />
          <Route path="questions" element={<div>QUESTIONS</div>} />
          <Route path="contacts" element={<div>CONTACTS</div>} />
          <Route path="cakes" element={<CakesTypePage />} />
          <Route path="bento" element={<BentoTypePage />} />
          <Route path="macaroon" element={<MacaroonTypePage />} />
          <Route path="tarts" element={<TartsTypePage />} />
          <Route path="newCakes" element={<div>newCakes</div>} />
          <Route path="desserts/:id" element={<CakesByIdRender />} />
          <Route path="user" element={<UserPage />}>
            <Route index path="personalData" element={<PersonalData />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="wishList" element={<WishList />} />
          </Route>
        </Route>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/verify/:code" element={<ConfirmationPage />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default App;
