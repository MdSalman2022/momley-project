import { Player } from "@lottiefiles/react-lottie-player";
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const [totalPages, setTotalPages] = useState(0);

  console.log(page);
  console.log(pageSize);
  const {
    data: { books: allBooks = [] } = {},
    isLoading,
    error,
    refetch,
  } = useQuery(
    ["allData", page, pageSize],
    async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }/api/get/booklist?page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    },
    {
      cacheTime: 10 * 60 * 1000, // cache data for 10 minutes
      staleTime: 5 * 60 * 1000, // consider data fresh for 5 minutes
      onSuccess: data => {
        console.log(data);
        const totalCount = data.totalDataLength; // Assuming the API response provides the total count of books
        const calculatedTotalPages = Math.ceil(totalCount / pageSize);
        setTotalPages(calculatedTotalPages);
      },
    }
  );

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart ? savedCart : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart.length]);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (
      cartFromLocalStorage &&
      JSON.stringify(cartFromLocalStorage) !== JSON.stringify(cart)
    ) {
      setCart(cartFromLocalStorage);
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart.length]);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (
      cartFromLocalStorage &&
      JSON.stringify(cartFromLocalStorage) !== JSON.stringify(cart)
    ) {
      setCart(cartFromLocalStorage);
    }
  }, [cart]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  // Save the cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (isLoading) {
    // console.log(isLoading);
    return (
      <div className="flex justify-center items-center h-screen bg-white bg-opacity-30">
        <Player
          className="w-80 md:w-52 object-cover"
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json"
        ></Player>
      </div>
    );
  }

  // console.log(allBooks);

  const stateInfo = {
    allBooks,
    isLoading,
    error,
    refetch,
    cart,
    setCart,
    setPageSize,
    setPage,
    page,
    pageSize,
    totalPages,
    setTotalPages,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
