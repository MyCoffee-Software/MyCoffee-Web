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
import PrivateRoute from "./PrivateRoute";
import ForbiddenAccess from "../pages/ForbiddenAccess";

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
            <Route path="/access_denied" element={<ForbiddenAccess />} />
            <Route exact path="/plans" element={<Plan />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/profile" element={<Profile />} />
          </Route>

          <Route element={<LayoutDefault sidebar={true} />}>
            <Route path="/products" element={<AvailableProducts />} />
          </Route>

          <Route element={<LayoutDefault sidebar={false} url={"/products"} />}>
            <Route exact path="/product/:product_id" element={<Product />} />
          </Route>

          {/* Dashboard */}
          <Route element={<LayoutDashboard />}>
            <Route path="/dashboard" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <Dashboard />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<LayoutDashboard url="/dashboard" />}>
            <Route path="/dashboard/products_dashboard" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <ProductsDashboard />
              </PrivateRoute>
            } />
            <Route path="/dashboard/category_dashboard" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <CategoryDashboard />
              </PrivateRoute>
            } />
            <Route path="/dashboard/reports" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <Reports />
              </PrivateRoute>
            } />
          </Route>

          <Route element={<LayoutDashboard url="/dashboard/products_dashboard" />}>
            <Route path="/dashboard/product_edit/:product_id" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <EditProduct />
              </PrivateRoute>
            } />
            <Route path="/dashboard/product_edit" element={
              <PrivateRoute requiredsPermissions={['Administrador', 'Funcionário']}>
                <EditProduct />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
