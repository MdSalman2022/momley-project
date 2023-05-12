import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto py-2">
      <nav className="flex items-center justify-between">
        <Link to="/" className="logo">
          <img
            src="https://i.ibb.co/TW8T2kc/logo-momley.png"
            alt="momley"
            width={250}
            height={120}
          />
        </Link>
        <div className="flex items-center gap-3 relative ">
          <input type="text" className="input-box w-96 h-10 rounded-lg" />
          <button className="absolute right-1 top-2 rounded bg-black text-white flex items-center justify-center w-10 h-8">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border-r px-5 gap-2">
            <FiPhoneCall className="text-xl" />
            <div className="flex flex-col text-sm">
              <span>Call Now</span>
              <span>+8801812141241</span>
            </div>
          </div>
          <div className="flex flex-col px-5">
            Bag <span>0.00</span>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag className="text-3xl" />
            <span className="absolute top-0 right-0 w-3 text-xs rounded-full text-white bg-red-500 flex justify-center">
              1
            </span>
          </div>
          <button className="primary-outline-btn px-3 py-2">
            login/ sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
