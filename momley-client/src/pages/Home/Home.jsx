import React from "react";
import Banner from "../../components/Home/Banner";
import Categories from "../../components/Home/Categories";
import BooksInHome from "../../components/Home/BooksInHome";

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
