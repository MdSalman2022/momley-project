import { useContext } from "react";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";

const Categories = () => {
  const { allBooks } = useContext(StateContext);

  const writerList = allBooks.map(book => book.specification.author);

  const uniqueWriterList = [...new Set(writerList)];

  // console.log(writerList);
  // console.log(uniqueWriterList);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
        <div className="flex primary-outline-btn justify-center">Al Quran</div>
      </div>
      <p className="font-semibold text-xl">Shop by writer</p>
      <div className="grid grid-cols-5 gap-5">
        {uniqueWriterList.map((writer, index) => (
          <div key={index} className="flex primary-outline-btn justify-center">
            {writer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
