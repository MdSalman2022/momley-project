import React, { useEffect, useState } from "react";

const CategoriesGrid = ({ onSelectionChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [selectedSubSubSubCategory, setSelectedSubSubSubCategory] =
    useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/allCategories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSelectedSubSubSubCategory(null);
    onSelectionChange({
      selectedCategory: category,
      selectedSubCategory: null,
      selectedSubSubCategory: null,
      selectedSubSubSubCategory: null,
    });
  };

  const handleSubCategoryClick = subCategory => {
    setSelectedSubCategory(subCategory);
    setSelectedSubSubCategory(null);
    setSelectedSubSubSubCategory(null);
    onSelectionChange({
      selectedCategory,
      selectedSubCategory: subCategory,
      selectedSubSubCategory: null,
      selectedSubSubSubCategory: null,
    });
  };

  const handleSubSubCategoryClick = subSubCategory => {
    setSelectedSubSubCategory(subSubCategory);
    setSelectedSubSubSubCategory(null);
    onSelectionChange({
      selectedCategory,
      selectedSubCategory,
      selectedSubSubCategory: subSubCategory,
      selectedSubSubSubCategory: null,
    });
  };

  const handleSubSubSubCategoryClick = subSubSubCategory => {
    setSelectedSubSubSubCategory(subSubSubCategory);
    onSelectionChange({
      selectedCategory,
      selectedSubCategory,
      selectedSubSubCategory,
      selectedSubSubSubCategory: subSubSubCategory,
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4">
        <div className="border-r px-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className={` ${
                category === selectedCategory
                  ? "selected text-black font-semibold cursor-pointer"
                  : "text-gray-500"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="py-2 border-b ">{category.name}</h3>
            </div>
          ))}
        </div>
        {selectedCategory && (
          <div className="border-r px-5">
            {selectedCategory.subCategories.map((subCategory, index) => (
              <div
                key={index}
                className={
                  subCategory === selectedSubCategory
                    ? "selected text-black font-semibold cursor-pointer"
                    : "text-gray-500"
                }
                onClick={() => handleSubCategoryClick(subCategory)}
              >
                <h4 className="py-2 border-b ">{subCategory.name}</h4>
              </div>
            ))}
          </div>
        )}
        {selectedSubCategory && (
          <div className="border-r px-5">
            {selectedSubCategory.subCategories.map((subSubCategory, index) => (
              <div
                key={index}
                className={
                  subSubCategory === selectedSubSubCategory
                    ? "selected text-black font-semibold cursor-pointer "
                    : "text-gray-500"
                }
                onClick={() => handleSubSubCategoryClick(subSubCategory)}
              >
                <h5 className="py-2 border-b">{subSubCategory.name}</h5>
              </div>
            ))}
          </div>
        )}
        {selectedSubSubCategory && (
          <div className="border-r px-5">
            {selectedSubSubCategory.subCategories.map(
              (subSubSubCategory, index) => (
                <div
                  key={index}
                  className={
                    subSubSubCategory === selectedSubSubSubCategory
                      ? "selected text-black font-semibold cursor-pointer"
                      : "text-gray-500"
                  }
                  onClick={() =>
                    handleSubSubSubCategoryClick(subSubSubCategory)
                  }
                >
                  <p className="py-2 border-b">{subSubSubCategory.name}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {/* <h4>
        <span className="text-gray-400">The currently selected:</span>{" "}
        <span className="text-black font-medium">
          {selectedCategory?.name} {selectedSubCategory && "|"}{" "}
          {selectedSubCategory?.name} {selectedSubSubCategory && "|"}{" "}
          {selectedSubSubCategory?.name} {selectedSubSubSubCategory && "|"}{" "}
          {selectedSubSubSubCategory?.name}
        </span>
      </h4> */}
    </div>
  );
};

export default CategoriesGrid;
