import { BsCartPlus } from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col items-center gap-3 border border-[#EEEEEE] p-3 rounded">
      <Link to={`/details/${book._id}`}>
        <img className="" src={book.image} width={164} height={217} />
      </Link>
      <Link to={`/details/${book._id}`}>
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
      <button className="primary-outline-btn flex items-center gap-2">
        <BsCartPlus className="text-xl" />
        Add to Bag
      </button>
    </div>
  );
};

export default BookCard;
