import React from "react";
import Banner from "../../../components/Main/Home/Banner";
import Categories from "../../../components/Main/Home/Categories";
import BooksInHome from "../../../components/Main/Home/BooksInHome";

const Home = () => {
  return (
    <div>
      <div className="container  ">
        <Banner />
        <Categories />
        <BooksInHome />
      </div>
    </div>
  );
};

export default Home;
