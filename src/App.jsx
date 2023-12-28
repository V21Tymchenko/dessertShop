import { Route, Routes } from "react-router-dom";
import SharedLayout from "@/components/SharedLayout";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import CakesPage from "./pages/CakesPage";
import ConfirmationPage from "./pages/ConfirmPage";
import UserPage from "./pages/UserPage";
import PersonalData from "./components/UserData/PersonalData/PersonalData";
import MyOrders from "./components/UserData/MyOrders/MyOrders";
import WishList from "./components/UserData/WishList/WishList";



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
