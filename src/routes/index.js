import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithSidebar from "../components/Layouts/LayoutWithSidebar";
import LayoutWithoutSidebar from "../components/Layouts/LayoutWithoutSidebar";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<LayoutWithSidebar />}>

          </Route>

          <Route element={<LayoutWithoutSidebar />}>
            
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;