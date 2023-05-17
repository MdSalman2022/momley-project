import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import BookDetails from "../../pages/BookDetails/BookDetails";
import Category from "../../pages/category/Category";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import CheckoutInfoPage from "../../pages/CheckoutInfoPage/CheckoutInfoPage";
import OrderSuccessPage from "../../pages/OrderSuccessPage/OrderSuccessPage";
import UserProfile from "../../pages/UserDashboard/UserProfile/UserProfile";

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
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_URL}/api/get/book/${params.id}`),
        element: <BookDetails />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/info",
        element: <CheckoutInfoPage />,
      },
      {
        path: "/checkout/successfull",
        element: <OrderSuccessPage />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);
