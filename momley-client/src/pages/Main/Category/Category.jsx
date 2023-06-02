"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";
import Banner from "../../../components/Main/Home/Banner";
import BookCard from "../../../components/Shared/BookCard";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";
import Loading from "../../../components/Shared/Loading";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const {
    allBooks,
    isLoading,
    setPage,
    setPageSize,
    pageSize,
    page,
    totalPages,
    setTotalPages,
    refetch,
  } = useContext(StateContext);

  console.log(pageSize);

  const [filterBooks, setFilterBooks] = useState([]);

  const data = useLoaderData();

  console.log(allBooks);

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/authors`)
      .then(res => res.json())
      .then(data => setAuthors(data));
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/categories`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const [writerName, setWriterName] = useState("");

  const handleFilterPrice = price => {
    fetch(
      `http://localhost:5000/api/get/books/byprice?amount=${price}&&page=${page}&&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setWriterName("");
        setFilterBooks(data.books);
        const pages = Math.ceil(data.totalDataLength / pageSize);
        setTotalPages(pages);
      });
  };
  const handleFilterWriter = writer => {
    setWriterName(writer);
    fetch(
      `http://localhost:5000/api/get/books/byauthor?writer=${writer}&&page=${page}&&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(writer);
        console.log(data);
        setFilterBooks(data.books);
        const pages = Math.ceil(data.totalDataLength / pageSize);
        setTotalPages(pages);
      });
  };

  const handleFilterCategory = category => {
    setWriterName(category);
    fetch(
      `http://localhost:5000/api/get/books/bycategory?category=${category}&&page=${page}&&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(category);
        console.log(data);
        setFilterBooks(data.books);
        const pages = Math.ceil(data.totalDataLength / pageSize);
        setTotalPages(pages);
      });
  };

  const underPrice = [250, 350, 450, 550, 1000];

  console.log(pageSize);
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="pb-10">
      <div className="container mx-auto ">
        <Banner />
        <div className="grid grid-cols-4 gap-10 py-5">
          <div className="col-span-1 border rounded-lg flex flex-col gap-5 max-h-none">
            <div className="flex flex-col p-3">
              <div className="flex items-center justify-between">
                <span className="flex gap-5 items-center">Price </span>
                {/* <FaChevronUp /> */}
                <span
                  onClick={() => setFilterBooks("")}
                  className="text-xs text-blue-600 cursor-pointer"
                >
                  Reset
                </span>
              </div>
              {underPrice.map((price, index) => (
                <div
                  onClick={() => handleFilterPrice(price)}
                  key={index}
                  className="form-control border-b py-3 "
                >
                  <label className="label justify-start gap-5 cursor-pointer">
                    <input
                      type="radio"
                      name="priceRange"
                      className="radio radio-sm"
                    />
                    <span className="label-text">Under {price}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex flex-col p-3">
              <div className="flex items-center justify-between">
                <span className="flex gap-5 items-center">Writers </span>
                {/* <FaChevronUp /> */}
                <span
                  onClick={() => setFilterBooks("")}
                  className="text-xs text-blue-600 cursor-pointer"
                >
                  Reset
                </span>
              </div>
              {authors.map((author, index) => (
                <label
                  key={index}
                  onClick={() => handleFilterWriter(author)}
                  className="label justify-start gap-5 cursor-pointer border-b"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    className="radio radio-sm"
                  />
                  <div className="flex gap-5 py-3 ">
                    <span className="transition-all duration-200 cursor-pointer font-medium hover:font-semibold">
                      {author}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex flex-col p-3">
              <div className="flex items-center justify-between">
                <span className="flex gap-5 items-center">Publisher </span>
                {/* <FaChevronUp /> */}
                <span
                  onClick={() => setFilterBooks("")}
                  className="text-xs text-blue-600 cursor-pointer"
                >
                  Reset
                </span>
              </div>
              <div>
                {categories.map((category, index) => (
                  <label
                    key={index}
                    onClick={() => handleFilterCategory(category)}
                    className="label justify-start gap-5 cursor-pointer border-b"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      className="radio radio-sm"
                    />
                    <div className="flex gap-5 py-3 ">
                      <span className="transition-all duration-200 cursor-pointer font-medium hover:font-semibold">
                        {category}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <p>{writerName || "All Books"} </p>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3">
                    <span>Sort By:</span>
                    <select
                      className="bg-gray-300 p-1 rounded-lg"
                      name=""
                      id=""
                    >
                      <option value="Default" selected>
                        Default
                      </option>
                      <option value="Default" selected>
                        Low to High
                      </option>
                      <option value="Default" selected>
                        High to Low
                      </option>
                      <option value="Default" selected>
                        Popularity
                      </option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>Show:</span>
                    <select
                      className="bg-gray-300 p-1 rounded-lg"
                      name="pagesize"
                      id=""
                      onChange={e => setPageSize(e.target.value)}
                      defaultValue={pageSize}
                    >
                      <option value={10} selected>
                        10
                      </option>
                      <option value={20} selected>
                        20
                      </option>
                      <option value={30} selected>
                        30
                      </option>
                      <option value={40} selected>
                        40
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  {Array(8)
                    .fill()
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-60 h-96 rounded-lg bg-gray-300 animate-pulse p-5 flex flex-col items-center gap-5"
                      >
                        <div className="rounded-lg w-full h-64 bg-gray-400 animate-pulse"></div>
                        <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                        <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                        <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
                        <div className="rounded-lg w-44 h-14 bg-gray-400 animate-pulse"></div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  {filterBooks.length > 0
                    ? filterBooks.map((book, index) => (
                        <BookCard key={index} book={book} />
                      ))
                    : data
                    ? data.map((book, index) => (
                        <BookCard key={index} book={book} />
                      ))
                    : allBooks.map((book, index) => (
                        <BookCard key={index} book={book} />
                      ))}
                  {totalPages > 0 && (
                    <div className="col-span-4 flex items-center gap-10 justify-center">
                      <button
                        className="primary-btn"
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                      >
                        Previous
                      </button>
                      <span>
                        Page {page} of {totalPages}
                      </span>
                      <button
                        className="primary-btn"
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <strong>You may also like</strong>
        {isLoading ? (
          <div className="grid grid-cols-6 gap-5">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-52 h-96 rounded-lg bg-gray-300 animate-pulse p-5 flex flex-col items-center gap-5"
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
          <div className="grid grid-cols-6 gap-5">
            {allBooks &&
              allBooks
                ?.slice(0, 10)
                ?.map((book, index) => <BookCard key={index} book={book} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
