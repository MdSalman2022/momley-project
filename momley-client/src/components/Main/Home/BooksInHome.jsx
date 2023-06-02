import React, { useContext, useEffect, useState } from "react";
import BooksGroup from "../../Shared/BooksGroup";
import Loading from "../../Shared/Loading";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";
import BookCard from "../../Shared/BookCard";
import { Link } from "react-router-dom";

const BooksInHome = () => {
  const { allBooks, isLoading } = useContext(StateContext);

  return (
    <div className="py-5 flex flex-col items-start">
      <p>New Arrival</p>
      <div className="py-5 flex flex-col gap-3 items-center w-full">
        {isLoading ? (
          <div className="flex flex-col md:grid grid-cols-5 gap-5">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-64 h-96 rounded-lg bg-gray-300 animate-pulse p-5 flex flex-col items-center gap-5"
                >
                  <div className="rounded-lg w-full h-64 bg-gray-400 animate-pulse"></div>
                  <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                  <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                  <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                  <div className="rounded-lg w-40 h-14 bg-gray-400 animate-pulse"></div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col md:grid grid-cols-5 gap-5">
            {allBooks &&
              allBooks
                ?.slice(0, 20)
                ?.map((book, index) => <BookCard key={index} book={book} />)}
          </div>
        )}
        <Link to="/books">
          <button className="primary-btn">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default BooksInHome;
