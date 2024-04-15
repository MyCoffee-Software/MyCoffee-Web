import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;