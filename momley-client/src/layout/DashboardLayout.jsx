import React, { useState } from "react";
import {
  AiOutlineLayout,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsBag, BsBarChart, BsGrid, BsListTask, BsShop } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { TbChecklist, TbDiscount2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/")[2];

  console.log(pathname);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto ">
        <div className="px-5 md:px-0 py-0 ">
          <div className="flex flex-col items-start md:grid md:grid-cols-4 gap-0 container mx-auto min-h-screen">
            <div className="flex flex-col items-center gap-1 p-3 bg-white border h-fit w-full">
              <Link to="/">
                <img
                  className="w-52 py-6"
                  src="https://i.ibb.co/TW8T2kc/logo-momley.png"
                  alt=""
                />
              </Link>
              <Link className="w-full" to="/dashboard/overview">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "overview"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <BsGrid className="text-xl" /> Dashboard
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/products">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "products"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <BsBag className="text-xl" /> Products
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/orders">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "orders"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <AiOutlineShoppingCart /> Orders
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/inventory">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "inventory"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <TbChecklist /> Inventory
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/shopper-list">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "shopper-list"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <BsShop /> Shopper List
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/customers">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "customers"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <HiOutlineUsers /> Customers
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/discount">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "discount"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <TbDiscount2 /> Discount
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/report">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "report"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <BsBarChart /> Report
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/preferences">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "preferences"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <MdOutlineRoomPreferences /> Preferences
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/navigation">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "navigation"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <BsListTask /> Navigation
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/page-create">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "page-create"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <AiOutlineLayout /> Page Create
                </p>
              </Link>
              <Link className="w-full" to="/dashboard/settings">
                <p
                  className={`h-[52px] rounded ${
                    pathname === "settings"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } w-full flex items-center gap-2 px-5`}
                >
                  <AiOutlineSetting /> Settings
                </p>
              </Link>
            </div>
            <div className="col-span-3 flex flex-col">
              <div className="flex flex-col items-start md:flex-row justify-between px-5 py-3 m-5 bg-white">
                <input
                  type="text"
                  className="input-box rounded-full w-80"
                  placeholder="Search"
                />
                <div className="flex gap-5 items-center">
                  <IoIosNotificationsOutline className="text-2xl" />
                  <BsBag className="text-xl" />
                  <div className="flex items-center text-end gap-2">
                    <div className="flex flex-col gap-0">
                      <p className="font-medium">Md Omar Faruk</p>
                      <small>Admin</small>
                    </div>
                    <img
                      className="rounded-full w-10"
                      src="img/profileImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="m-5">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
