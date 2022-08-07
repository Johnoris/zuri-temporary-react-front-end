import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../pages/main/contactUs";
import ForgotPassword from "../pages/auth/forgotPassword";
import PasswordResetPage from "../pages/auth/passwordResetPage";
import SignUp from "../pages/auth/signUp";
import Login from "../pages/auth/login";
import PasswordResetCode from "../pages/auth/passwordresetcode";
import LandingPage from "../pages/main/landingpage";
import AccountVerify from "../pages/auth/accountverify";
import VerifySuccess from "../pages/auth/verifysuccess";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account-verify" element={<AccountVerify/>}/>
        <Route path="/verify-success" element={<VerifySuccess/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset-page" element={<PasswordResetPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset-code" element={<PasswordResetCode />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
