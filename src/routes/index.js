import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithSidebar from "../components/Layouts/LayoutWithSidebar";
import LayoutWithoutSidebar from "../components/Layouts/LayoutWithoutSidebar";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import AvailableProducts from "../pages/AvailableProducts";
import Product from "../pages/Product";
import Profile from "../pages/Profile";


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route element={<LayoutWithSidebar />}>
            <Route path="/products" element={<AvailableProducts />} />
          </Route>

          <Route element={<LayoutWithoutSidebar />}>
            <Route exact path="/product/:product_id" element={<Product />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;