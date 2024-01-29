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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CakesCatalogPage />} />
          <Route path="constructor" element={<div>CONSTRUCTOR</div>} />
          <Route path="about" element={<div>ABOUT</div>} />
          <Route path="delivery" element={<div>DELIVERY</div>} />
          <Route path="cooperation" element={<div>COOPERATION</div>} />
          <Route path="questions" element={<div>QUESTIONS</div>} />
          <Route path="contacts" element={<div>CONTACTS</div>} />
          <Route path="cakes" element={<CakesTypePage />} />
          <Route path="bento" element={<BentoTypePage />} />
          <Route path="macaroon" element={<MacaroonTypePage />} />
          <Route path="tarts" element={<TartsTypePage />} />
          <Route path="newCakes" element={<div>newCakes</div>} />
          <Route path="desserts/:id" element={<CakesByIdRender />} />
        </Route>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/verify/:code" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
};

export default App;
