import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithSidebar from "../components/Layouts/LayoutWithSidebar";
import LayoutWithoutSidebar from "../components/Layouts/LayoutWithoutSidebar";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import AvailableProducts from "../pages/AvailableProducts";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import Plan from "../pages/Plan";
import Home from "../pages/Home";

import Dashboard from "../pages/Dashboard";
import LayoutDashboard from "../components/Layouts/LayoutDashboard";
import ProductsDashboard from "../pages/Dashboard/Products";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

          {/* Com side bar */}
          <Route element={<LayoutWithSidebar />}>
            <Route path="/products" element={<AvailableProducts />} />
          </Route>

          {/* Sem side bar */}
          <Route element={<LayoutWithoutSidebar />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/product/:product_id" element={<Product />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/product/:product_id" element={<Product />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/plans" element={<Plan />} />
          </Route>

          {/* Dashboard */}
          <Route element={<LayoutDashboard />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/products_dashboard"
              element={<ProductsDashboard />}
            />
            <Route
              path="/dashboard/product_edit/:product_id"
              element={<ProductsDashboard />}
            />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
