"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaTwitter,
  FaShippingFast,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { StateContext } from "../../contexts/StateProvider/StateProvider";
import Loading from "../../components/Shared/Loading";
import BookCard from "../../components/Shared/BookCard";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HorizontalBookCard from "../../components/BookDetails/HorizontalBookCard/HorizontalBookCard";
import { Player } from "@lottiefiles/react-lottie-player";

const BookDetails = () => {
  const bookDetails = useLoaderData();

  console.log(bookDetails);

  const { id } = useParams();
  const { allBooks, cart, setCart } = useContext(StateContext);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;
    cartData.forEach(item => {
      if (item._id === bookDetails._id) {
        count += item.quantity;
      }
    });
    setCartCount(count);
  }, [cart]);

  const handleAddToCart = () => {
    const cartItem = cart.find(item => item._id === bookDetails._id);

    if (cartItem) {
      const updatedCart = cart.map(item => {
        if (item._id === bookDetails._id) {
          const updatedItem = {
            ...item,
            quantity: cartCount ? cartCount : item.quantity + 1,
            totalPrice:
              item.price * (cartCount ? cartCount : item.quantity + 1),
          };
          return updatedItem;
        } else {
          return item;
        }
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartCount(cartCount ? cartCount : cartItem.quantity + 1);
    } else {
      const newCartItem = {
        ...bookDetails,
        quantity: cartCount ? cartCount : 1,
        totalPrice: bookDetails.price * (cartCount ? cartCount : 1),
      };
      setCart([...cart, newCartItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));
      setCartCount(cartCount ? cartCount : 1);
    }
  };

  const handleMinusClick = () => {
    if (cartCount === 0) {
      return; // do not update cartCount if it's already 0
    }
    setCartCount(cartCount - 1);
  };

  const handlePlusClick = () => {
    setCartCount(cartCount + 1);
  };

  const relatedBooks = allBooks.filter(book => book._id !== id);

  console.log(cart);

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto">
        <p className="py-5">Home/Categories/Mom & Baby</p>
        {/* <Login /> */}
        <div className="grid grid-cols-4">
          <div className="col-span-3 grid grid-cols-2 gap-5 h-fit">
            <div className="flex col-span-2 w-full gap-10">
              <div className="flex flex-col gap-5">
                <img
                  className="object-contain w-full md:w-fit lg:w-[360px] h-[400px]"
                  src={bookDetails.image}
                />
                <div className="flex items-center gap-5">
                  <img
                    src="https://i.ibb.co/VJJW1pv/image.png"
                    width={75}
                    height={120}
                  />
                  <img
                    src="https://i.ibb.co/VJJW1pv/image.png"
                    width={75}
                    height={120}
                  />
                  <img
                    src="https://i.ibb.co/VJJW1pv/image.png"
                    width={75}
                    height={120}
                  />
                  <img
                    src="https://i.ibb.co/VJJW1pv/image.png"
                    width={75}
                    height={120}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl">{bookDetails.name}</h2>
                <div className="text-4xl text-red-500 font-bold">
                  Tk {bookDetails.price}
                </div>
                <p>Writer: {bookDetails.writer}</p>
                <p>Publisher: Sabil Publication</p>
                <p>Category: Sirate Rasul</p>
                <div className="flex gap-2">
                  <p>
                    Availability:{" "}
                    <span className="text-green-500">In Stock</span>
                  </p>
                  <p>
                    <span className="font-semibold">SUK:</span>123456
                  </p>
                </div>
                <div className="primary-btn w-fit">
                  Offer Ends in: 2 days 09:20:30
                </div>
                <p>Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleMinusClick}
                    className="p-2 px-3 border"
                  >
                    <FaMinus />
                  </button>
                  <span>{cartCount}</span>
                  <button
                    onClick={handlePlusClick}
                    className="p-2 px-3 primary-btn"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex gap-5">
                  <div
                    onClick={handleAddToCart}
                    className="primary-outline-btn w-40 flex justify-center"
                  >
                    Add to cart
                  </div>
                  <Link
                    to="/checkout"
                    className="primary-btn w-40 flex justify-center"
                  >
                    Buy Now
                  </Link>
                </div>
                <p className="flex items-center gap-5">
                  Share:
                  <FaFacebookF className="bg-blue-500 p-1 text-3xl rounded-full text-white" />
                  <FaTwitter className="bg-sky-500 p-1 text-3xl rounded-full text-white" />
                  <FaInstagram className="bg-pink-500 p-1 text-3xl rounded-full text-white" />
                </p>
              </div>
            </div>
            <div className="flex col-span-2 items-start h-fit">
              <div className="flex flex-col py-10">
                <div className="flex gap-10 py-5">
                  <span className="border-b-2 border-black">Description</span>
                  <span className="">Additional information</span>
                  <span className="">Review</span>
                </div>

                <div className="flex flex-col gap-5 mr-2">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos in non doloribus facilis repellendus beatae nam
                    ipsa vitae cum ad, eum nemo accusamus maiores voluptas, vel
                    dolore veniam sunt. Repudiandae impedit, fugit laudantium
                    ipsam, sint explicabo quaerat nam officiis eum ad enim,
                    consequatur inventore accusamus! Necessitatibus accusamus
                    neque ex blanditiis.
                  </p>

                  <p className="text-xl">Specification</p>
                  <div>
                    <div className="grid grid-cols-4">
                      <span>Material</span>
                      <span className="col-span-2">ABC</span>
                    </div>
                    <div className="grid grid-cols-4">
                      <span>Claimed Size</span>
                      <span className="col-span-2">ABC</span>
                    </div>
                    <div className="grid grid-cols-4">
                      <span>Recommended Use</span>
                      <span className="col-span-2">ABC</span>
                    </div>
                    <div className="grid grid-cols-4">
                      <span>Manufacturer</span>
                      <span className="col-span-2">ABC</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima numquam, tempore facere nobis nesciunt tenetur dolor
                    laudantium culpa commodi? Eius impedit, delectus veniam,
                    veritatis eaque maxime non atque ullam minus ut quia
                    deserunt ex amet quo et neque alias nesciunt, asperiores
                    voluptates itaque? Reprehenderit nostrum libero eos
                    voluptatum delectus commodi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex flex-col gap-3 text-sm border p-5">
              <div className="flex flex-nowrap items-center gap-5 py-3 border-b">
                <MdOutlineSecurityUpdateGood className="text-3xl" />
                <div className="flex flex-col">
                  <p className="font-semibold">SECURED PAYMENT</p>
                  <p>We ensure secure payment</p>
                </div>
              </div>
              <div className="flex flex-nowrap items-center gap-5 py-3 border-b">
                <FaShippingFast className="text-3xl" />
                <div className="flex flex-col">
                  <p className="font-semibold">FREE SHIPPING</p>
                  <p>ON ALL Tk above 700 TK</p>
                </div>
              </div>
              <div className="flex flex-nowrap items-center gap-5 py-3 ">
                <SiMoneygram className="text-3xl" />
                <div className="flex flex-col">
                  <p className="font-semibold">MONEY BACK GUARANTEE</p>
                  <p>Any back within 7 days </p>
                </div>
              </div>
            </div>
            <div className="border rounded p-3">
              <p className="font-semibold text-xl">Review</p>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-lg">121 Customers</p>
                  <p className="text-6xl">4.6</p>
                  <span className="flex items-center text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </span>
                  <p>out of 5</p>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <p>Rating</p>
                  <div>
                    <div className="flex items-start gap-5">
                      <p>5</p>
                      <span className="h-5 w-32 p-2 bg-green-500"></span>
                    </div>
                    <div className="flex items-start gap-5">
                      <p>4</p>
                      <span className="h-5 w-28 p-2 bg-blue-500"></span>
                    </div>
                    <div className="flex items-start gap-5">
                      <p>3</p>
                      <span className="h-5 w-10 p-2 bg-orange-500"></span>
                    </div>
                    <div className="flex items-start gap-5">
                      <p>2</p>
                      <span className="h-5 w-5 p-2 bg-yellow-500"></span>
                    </div>
                    <div className="flex items-start gap-5">
                      <p>1</p>
                      <span className="h-5 w-2 p-2 bg-red-500"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Products  starts*/}
            <div className="flex flex-col gap-5">
              <p className="input-box rounded-none text-xl font-semibold">
                Recommended for you
              </p>
              <div className="flex flex-col gap-5">
                {relatedBooks.slice(0, 3).map((book, index) => (
                  <HorizontalBookCard key={book._id} book={book} />
                ))}
              </div>
            </div>
            {/* Recommended Products  ends*/}
          </div>
          <p className="text-xl font-semibold">Related Products</p>
          <div className="col-span-4 grid grid-cols-6 gap-5 py-5">
            {allBooks.map((book, index) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BookDetails;
