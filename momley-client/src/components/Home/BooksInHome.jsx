import React, { useContext, useEffect, useState } from "react";
import BooksGroup from "../Shared/BooksGroup";
import Loading from "../Shared/Loading";
import { StateContext } from "../../contexts/StateProvider/StateProvider";
import BookCard from "../Shared/BookCard";

const BooksInHome = () => {
  const { allBooks, isLoading } = useContext(StateContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-5 flex flex-col items-start">
      <p>New Arrival</p>
      <div className="py-5 flex flex-col gap-3 items-center">
        <div className="grid grid-cols-8 gap-5">
          {allBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
        <button className="primary-btn">See All</button>
      </div>
    </div>
  );
};

export default BooksInHome;
