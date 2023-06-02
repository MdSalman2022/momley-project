import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";
import { Link } from "react-router-dom";

const Categories = () => {
  // console.log(writerList);
  // console.log(uniqueWriterList);

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    setIsLoadingAuthors(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/authors`)
      .then(res => res.json())
      .then(data => {
        setAuthors(data);
        setIsLoadingAuthors(false);
      })
      .catch(error => {
        console.error("Error fetching authors:", error);
        setIsLoadingAuthors(false);
      });
  }, []);

  useEffect(() => {
    setIsLoadingCategories(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setIsLoadingCategories(false);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
        setIsLoadingCategories(false);
      });
  }, []);

  return (
    <div className="space-y-5">
      <p className="font-semibold text-xl">Shop by Category</p>
      <div className="grid grid-cols-4 gap-5">
        {isLoadingCategories
          ? Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="h-10 flex justify-center bg-gray-300 animate-pulse rounded"
                >
                  <div className="animate-pulse bg-gray-500 h-8 rounded"></div>
                </div>
              ))
          : categories.map((category, index) => (
              <Link
                to={`/books/${category}`}
                key={index}
                className="flex primary-outline-btn justify-center"
              >
                {category}
              </Link>
            ))}
      </div>
      <p className="font-semibold text-xl">Shop by writer</p>
      <div className="grid grid-cols-5 gap-5">
        {authors.map((writer, index) => (
          <div key={index} className="flex primary-outline-btn justify-center">
            {writer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
