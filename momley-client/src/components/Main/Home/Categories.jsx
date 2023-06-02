import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";
import { Link } from "react-router-dom";

const Categories = () => {
  // console.log(writerList);
  // console.log(uniqueWriterList);

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

  return (
    <div className="space-y-5">
      <p className="font-semibold text-xl">Shop by Category</p>
      <div className="grid grid-cols-4 gap-5">
        {categories.map((category, index) => (
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
