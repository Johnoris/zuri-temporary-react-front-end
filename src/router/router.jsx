import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../pages/main/contactUs";
import ForgotPassword from "../pages/auth/forgotPassword";
import PasswordResetPage from "../pages/auth/passwordResetPage";
import SignUp from "../pages/auth/signUp";
import Login from "../pages/auth/login";
import PasswordResetCode from "../pages/auth/passwordresetcode";
import LandingPage from "../pages/main/landingpage";
import LoginPage from "../pages/auth/loginpage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset-page" element={<PasswordResetPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset-code" element={<PasswordResetCode />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
