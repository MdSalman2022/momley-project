import React from "react";
import Header from "../components/Shared/Header";
import { Outlet, ScrollRestoration } from "react-router-dom/dist";
import Footer from "../components/Shared/Footer";
import CategoryNav from "../components/Shared/CategoryNav";

const Main = () => {
  return (
    <div>
      <Header />
      <CategoryNav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
