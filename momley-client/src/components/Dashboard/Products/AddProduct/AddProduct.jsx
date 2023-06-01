import React, { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import CategoryGrid from "./CategoryGrid";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [selectedValues, setSelectedValues] = useState({
    selectedCategory: null,
    selectedSubCategory: null,
    selectedSubSubCategory: null,
    selectedSubSubSubCategory: null,
  });

  const handleSelectionChange = selections => {
    setSelectedValues(selections);
  };

  const [imageUrls, setImageUrls] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  console.log(selectedValues);

  const navigate = useNavigate();

  const imageHostKey = import.meta.env.VITE_IMGBB_KEY;

  function handleFileSelect(event) {
    const file = event.target.files[0];
    console.log(file);
    const previewURL = URL.createObjectURL(file);

    setPreviewImages(prevImages => [...prevImages, previewURL]);

    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgUpload => {
        if (imgUpload.success) {
          setImageUrls(prevImages => [...prevImages, imgUpload.data.url]);
        }
      });
  }

  console.log(imageUrls);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const description = form.description.value;
    const category = selectedValues.selectedCategory?.name;
    const subCategory = selectedValues.selectedSubCategory?.name;
    const subSubCategory = selectedValues.selectedSubSubCategory?.name;
    const subSubSubCategory = selectedValues.selectedSubSubSubCategory?.name;
    const brand = form.brand.value;
    const supplier = form.supplier.value;
    const type = form.type.value;
    const author = form.author.value;
    const sku = form.sku.value;
    const quantity = form.quantity.value;
    const barcode = form.barcode.value;
    const price = form.price.value;
    const costperitem = form.costperitem.value;
    const stock = form.stock.value;
    const weight = form.weight.value;
    const deliveryDhaka = form.deliveryDhaka.value;
    const deliveryBD = form.deliveryBD.value;
    const storePickup = form.storePickup.value;
    const customDelivery = form.customDelivery.value;
    const images = imageUrls;

    const productData = {
      name,
      description,
      images,
      categoryInfo: {
        category,
        subCategory,
        subSubCategory,
        subSubSubCategory,
      },
      specification: {
        brand,
        supplier,
        type,
        author,
      },
      inventory: {
        sku,
        quantity,
        barcode,
      },
      pricing: {
        price,
        costperitem,
        stock,
      },
      shipping: {
        weight,
        deliveryDhaka,
        deliveryBD,
        storePickup,
        customDelivery,
      },
    };

    console.log(productData);

    try {
      // Send the POST request
      const response = fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/post/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      // Handle the response
      if (response) {
        // Request succeeded
        console.log("Product created successfully");
        toast.success("Product created successfully");
        navigate("/dashboard/products");
        // Reset the form or perform any other actions
      } else {
        // Request failed
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex justify-start items-center gap-3">
        <FaArrowLeft /> <p className="font-semibold">Add a New Product </p>
        <small className="text-gray-400">
          Please Choose the right category for your product
        </small>
      </div>
      <div className="border bg-white p-5 flex flex-col gap-5">
        <div className="flex flex-col">
          <p className="font-medium">Product Name</p>
          <input
            type="text"
            name="name"
            className="input-box w-full"
            placeholder="Enter your product name"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium">Categories Name</p>
          {/* <input
            type="text"
            name="category"
            className="input-box w-full"
            placeholder="Search allCategories name"
          /> */}
          <div className="flex flex-col gap-5">
            <CategoryGrid onSelectionChange={handleSelectionChange} />
            <h4 className="flex">
              <span className="text-gray-400">The currently selected:</span>{" "}
              <span className="text-black font-medium">
                {selectedValues.selectedCategory?.name}{" "}
                {selectedValues.selectedSubCategory?.name && "|"}{" "}
                {selectedValues.selectedSubCategory?.name}{" "}
                {selectedValues.selectedSubSubCategory?.name && "|"}{" "}
                {selectedValues.selectedSubSubCategory?.name}{" "}
                {selectedValues.selectedSubSubSubCategory?.name && "|"}{" "}
                {selectedValues.selectedSubSubSubCategory?.name}
              </span>
            </h4>
          </div>
          <div>
            <p className="font-medium">Product Description</p>
            <textarea
              className="input-box w-full h-52 p-3 border-2"
              name="description"
            ></textarea>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Product Images*</p>
            <div className="flex gap-5">
              {[1, 2, 3, 4].map(inputIndex => (
                <div
                  key={inputIndex}
                  className="w-20 h-20 border-dashed rounded-lg border border-[#2F80ED] flex items-center justify-center relative"
                >
                  {previewImages[inputIndex - 1] ? (
                    <img
                      src={previewImages[inputIndex - 1]}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="p-1 border rounded-full border-[#2F80ED] text-[#2F80ED]">
                      <FaPlus />
                    </span>
                  )}
                  <input
                    className="opacity-0 w-full h-full absolute inset-0"
                    onChange={handleFileSelect}
                    accept="image/*"
                    type="file"
                    name="image"
                    id=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-medium">Product Video*</p>
            <div className="flex gap-5">
              <div className="w-20 h-20 border-dashed rounded-lg border border-[#2F80ED] flex items-center justify-center">
                <span className="p-1 border rounded-full border-[#2F80ED] text-[#2F80ED]">
                  <FaPlus />
                </span>
              </div>
              <div className="flex flex-col text-[#BDBDBD]">
                <p>
                  {" "}
                  1. Size: Max 30Mb, resolution should not exceed 1280x1280px
                </p>
                <p>2. Duration: 10s-60s</p>
                <p>3. Format: MP4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold">Specification</p>
      <div className="border bg-white p-5 grid grid-cols-2 gap-5">
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>Brand*</p>
            <select name="brand" id="" className="input-box w-80">
              <option value="" disabled>
                Please select
              </option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <p>Product of</p>
            <select name="supplier" id="" className="input-box w-80">
              <option value="" disabled>
                Please select, Momley
              </option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>Product Type</p>
            <select name="type" id="" className="input-box w-80">
              <option value="" disabled>
                Please select
              </option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <p>Book Author</p>
            <input
              type="text"
              name="author"
              className="input-box w-80"
              placeholder="Please enter book author name"
            />
          </div>
        </div>
      </div>
      <p className="font-semibold">Inventory</p>
      <div className="border bg-white p-5 grid grid-cols-2 gap-5">
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>SKU</p>
            <input
              type="text"
              name="sku"
              className="input-box w-80"
              placeholder="Stock keeping Unit"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-5">
              <p>Quantity</p>
              <input
                type="text"
                name="quantity"
                className="input-box w-80"
                placeholder="0"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer gap-5">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Alert Quantity</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>Barcode</p>
            <input
              type="text"
              name="barcode"
              className="input-box w-80"
              placeholder="ISBN, UPC, GTIN, etc"
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-5">
              <input type="checkbox" checked className="checkbox" />
              <span className="label-text">
                Continue selling when out of stock
              </span>
            </label>
          </div>
        </div>
      </div>
      <p className="font-semibold">Pricing</p>
      <div className="border bg-white p-5 grid grid-cols-2 gap-5">
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>Price</p>
            <input
              type="text"
              name="price"
              className="input-box w-80"
              placeholder="BDT 0.00"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-5">
              <p>Stock</p>
              <input
                type="text"
                name="stock"
                className="input-box w-80"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center gap-5">
            <p>Cost Per Item</p>
            <input
              type="text"
              name="costperitem"
              className="input-box w-80"
              placeholder="BDT 0.00"
            />
          </div>
        </div>
      </div>
      <p className="font-semibold">Shipping</p>
      <div className="border p-5 flex flex-col gap-5 bg-white">
        <div className="">
          <div className="flex items-center gap-5">
            <p>Weight</p>
            <input
              type="text"
              name="weight"
              className="input-box w-80"
              placeholder="1 (Up to 4kg)"
            />
          </div>
        </div>
        <div className="p-3 border bg-white">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <label className="label justify-start cursor-pointer gap-5">
                <input type="checkbox" checked className="checkbox" />
                <span className="label-text">Home delivery in Dhaka</span>
              </label>
              <input
                type="text"
                name="deliveryDhaka"
                defaultValue={60.0}
                className="input-box"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="label justify-start cursor-pointer gap-5">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Home delivery in Bangladesh</span>
              </label>
              <input
                type="text"
                name="deliveryBD"
                defaultValue={120.0}
                className="input-box"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="label justify-start cursor-pointer gap-5">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Store Pickup</span>
              </label>
              <input
                type="text"
                name="storePickup"
                defaultValue={0.0}
                className="input-box"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label className="label justify-start cursor-pointer gap-5">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Custom Delivery</span>
              </label>
              <input
                type="text"
                name="customDelivery"
                defaultValue={0.0}
                className="input-box"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <button type="reset" className="primary-btn bg-gray-300">
          Cancel
        </button>
        <button type="submit" className="primary-btn bg-gray-300">
          Save and Draft
        </button>
        <button type="submit" className="primary-btn">
          Save and Publish
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
