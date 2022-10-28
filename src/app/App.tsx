import AppNavigate from "./AppNavigate";
import PrivateRoute from "./private-route";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage from "../pages/test";
import DashboardPage from "../pages/dashboard";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isPageLogin>
              <TestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PrivateRoute isPageLogin>
              <TestPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
