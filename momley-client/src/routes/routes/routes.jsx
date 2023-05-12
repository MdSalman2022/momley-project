import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import BookDetails from "../../pages/BookDetails/BookDetails";
import Category from "../../pages/category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Category />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);
