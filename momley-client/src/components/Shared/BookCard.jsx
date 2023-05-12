import { useContext, useEffect, useState } from "react";
import { BsBag, BsCartPlus, BsDash, BsPlus } from "react-icons/bs";
import { FaMinus, FaPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StateContext } from "../../contexts/StateProvider/StateProvider";

const BookCard = ({ book }) => {
  const { cart, setCart } = useContext(StateContext);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;
    cartData.forEach(item => {
      if (item._id === book._id) {
        count += item.quantity;
      }
    });
    setCartCount(count);
  }, [cart]);

  const handleAddToCart = () => {
    const cartItem = cart.find(item => item._id === book._id);

    if (cartItem) {
      const updatedCart = cart.map(item => {
        if (item._id === book._id) {
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
        ...book,
        quantity: cartCount ? cartCount : 1,
        totalPrice: book.price * (cartCount ? cartCount : 1),
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

    const cartItem = cart.find(item => item._id === book._id);
    if (cartItem) {
      const updatedCart = cart.map(item => {
        if (item._id === book._id) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.price * (item.quantity - 1),
          };
          return updatedItem;
        } else {
          return item;
        }
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartCount(cartCount - 1);
    }
  };

  const handlePlusClick = () => {
    const cartItem = cart.find(item => item._id === book._id);
    if (cartItem) {
      const updatedCart = cart.map(item => {
        if (item._id === book._id) {
          const updatedItem = {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          };
          return updatedItem;
        } else {
          return item;
        }
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartCount(cartCount + 1);
    } else {
      const newCartItem = {
        ...book,
        quantity: 1,
        totalPrice: book.price,
      };
      setCart([...cart, newCartItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));
      setCartCount(1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 border border-[#EEEEEE] p-3 rounded">
      <Link to={`/book/${book._id}`}>
        <img className="" src={book.image} width={164} height={217} />
      </Link>
      <Link to={`/book/${book._id}`}>
        <p className="font-semibold text-sm text-center">{book.name}</p>
      </Link>
      <p className="text-sm">{book.writer}</p>
      <p className="font-semibold ">৳ {book.price}</p>
      <span className="flex items-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf /> <span className="text-xs"> (05 reviews)</span>
      </span>
      {cartCount < 1 && (
        <div
          onClick={handleAddToCart}
          className="primary-outline-btn w-40 flex justify-center"
        >
          Add to cart
        </div>
      )}
      {cartCount > 0 && (
        <div className="flex items-center gap-3">
          <button onClick={handleMinusClick} className="p-2 px-3 border">
            <FaMinus />
          </button>
          <span>{cartCount}</span>
          <button onClick={handlePlusClick} className="p-2 px-3 primary-btn">
            <FaPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
