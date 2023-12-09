import { Route, Routes } from "react-router-dom";
import SharedLayout from "@/components/SharedLayout";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import CakesPage from "./pages/CakesPage";
import ConfirmationPage from "./pages/ConfirmPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cakes" element={<CakesPage />} />
          <Route path="constructor" element={<div>CONSTRUCTOR</div>} />
          <Route path="about" element={<div>ABOUT</div>} />
          <Route path="delivery" element={<div>DELIVERY</div>} />
          <Route path="cooperation" element={<div>COOPERATION</div>} />
          <Route path="questions" element={<div>QUESTIONS</div>} />
          <Route path="contacts" element={<div>CONTACTS</div>} />
        </Route>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/verify/:code" element={<ConfirmationPage />} />
      </Routes>
    </>
  );
};

export default App;
