import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const {
    data: allBooks = [],
    refetch,
    isLoading,
    error,
  } = useQuery(
    ["allData"],
    () =>
      fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/booklist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          console.log("Fetch successful!"); // add console log here
          return res.json();
        })
        .catch(err => {
          console.log("Fetch error:", err); // add console log here
        }),
    {
      cacheTime: 10 * (60 * 1000), // cache data for 10 minutes
      staleTime: 5 * (60 * 1000), // consider data fresh for 5 minutes
    }
  );

  console.log(allBooks);

  const stateInfo = {
    allBooks,
    isLoading,
    error,
    refetch,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
