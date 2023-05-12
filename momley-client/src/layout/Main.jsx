import React from "react";
import Header from "../components/Shared/Header";
import { Outlet, ScrollRestoration } from "react-router-dom/dist";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
