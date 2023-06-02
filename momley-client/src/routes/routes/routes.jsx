import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../../layout/Main";
import Home from "../../pages/Main/Home/Home";
import BookDetails from "../../pages/Main/BookDetails/BookDetails";
import Category from "../../pages/Main/category/Category";
import CheckoutPage from "../../pages/Main/CheckoutPage/CheckoutPage";
import CheckoutInfoPage from "../../pages/Main/CheckoutInfoPage/CheckoutInfoPage";
import OrderSuccessPage from "../../pages/Main/OrderSuccessPage/OrderSuccessPage";
import UserProfile from "../../pages/Main/UserDashboard/UserProfile/UserProfile";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Orders from "../../pages/Dashboard/Orders/Orders";
import Inventory from "../../pages/Dashboard/Inventory/Inventory";
import ShopperList from "../../pages/Dashboard/ShopperList/ShopperList";
import Customers from "../../pages/Dashboard/Customers/Customers";
import Discount from "../../pages/Dashboard/Discount/Discount";
import Report from "../../pages/Dashboard/Report/Report";
import Preferences from "../../pages/Dashboard/Preferences/Preferences";
import PageCreate from "../../pages/PageCreate/PageCreate";
import Settings from "../../pages/Settings/Settings";
import Navigation from "../../pages/Dashboard/Navigation/Navigation";
import Products from "../../pages/Dashboard/Products/Products";
import AddProduct from "../../components/Dashboard/Products/AddProduct/AddProduct";

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
        path: "/books/:name",
        loader: ({ params }) =>
          fetch(
            `${
              import.meta.env.VITE_SERVER_URL
            }/api/get/books/bycategory?category=${
              params.name
            }&&page=1&&pageSize=100`
          ),
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/products/add",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/inventory",
        element: <Inventory />,
      },
      {
        path: "/dashboard/shopper-list",
        element: <ShopperList />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
      {
        path: "/dashboard/discount",
        element: <Discount />,
      },
      {
        path: "/dashboard/report",
        element: <Report />,
      },
      {
        path: "/dashboard/preferences",
        element: <Preferences />,
      },
      {
        path: "/dashboard/navigation",
        element: <Navigation />,
      },
      {
        path: "/dashboard/page-create",
        element: <PageCreate />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
  },
]);
