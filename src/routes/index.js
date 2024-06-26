import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "../components/Layouts/LayoutDefault";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import AvailableProducts from "../pages/AvailableProducts";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import AboutUs from "../pages/AboutUs";
import Reports from "../pages/Reports";
import Cart from "../pages/Cart";
import Plan from "../pages/Plan";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import LayoutDashboard from "../components/Layouts/LayoutDashboard";
import ProductsDashboard from "../pages/Dashboard/Products/ListProducts";
import EditProduct from "../pages/Dashboard/Products/EditProduct";
import CategoryDashboard from "../pages/Dashboard/Category/ListCategorys";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route element={<LayoutDefault sidebar={false} />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/plans" element={<Plan />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>

          <Route element={<LayoutDefault sidebar={true}/>}>
            <Route path="/products" element={<AvailableProducts />} />
          </Route>

          <Route element={<LayoutDefault sidebar={false} url={"/products"}/>}>
            <Route exact path="/product/:product_id" element={<Product />} />
          </Route>

          {/* Dashboard */}
          <Route element={<LayoutDashboard />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<LayoutDashboard url="/dashboard"/>}>
            <Route path="/dashboard/products_dashboard" element={<ProductsDashboard />} />
            <Route path="/dashboard/category_dashboard" element={<CategoryDashboard />} />
            <Route path="/dashboard/reports" element={<Reports />} />
          </Route>

          <Route element={<LayoutDashboard url="/dashboard/products_dashboard"/>}>
            <Route path="/dashboard/product_edit/:product_id" element={<EditProduct />} />
            <Route path="/dashboard/product_edit" element={<EditProduct />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
