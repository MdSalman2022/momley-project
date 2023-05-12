"use client"
import React, { useEffect, useState } from 'react' 
import { FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa'
import Banner from '../components/Banner' 
import BookCard from '../components/BookCard';
import LoadingPage from '../loading';

 

const category = () => {
  
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/booklist");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }


  console.log(books)

  return (
      <div className="pb-10">
          <div className='container mx-auto '>
              <Banner/>
              <div className="grid grid-cols-4 gap-10 py-5">
                  <div className="col-span-1 border rounded-lg flex flex-col gap-5 max-h-none">
                    <div className='flex flex-col p-3'>
                      <div className="flex items-center justify-between"><span>Price</span><FaChevronUp /></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>Under 250</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>250 to 350</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>350 to 450</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>250 to 550</span></div>              
                    </div> 
                    <div className='flex flex-col p-3'>
                      <div className="flex items-center justify-between"><span>Categories</span><FaChevronUp /></div>
                      <div className="flex gap-5 border-b py-3 "><span>Baby Care</span></div>
                      <div className="flex gap-5 border-b py-3 "><span>Lotion</span></div>
                      <div className="flex gap-5 border-b py-3 "><span>Baby Products</span></div>
                      <div className="flex gap-5 border-b py-3 "><span>Baby Time</span></div>              
                    </div> 
                    <div className='flex flex-col p-3'>
                      <div className="flex items-center justify-between"><span>Brands</span><FaChevronUp /></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>A</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>B</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>C</span></div>
                      <div className="flex gap-5 border-b py-3 "><input type="checkbox" name="" id="" /><span>D</span></div>              
                    </div> 
                  </div>
                  <div className="col-span-3 flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between">
                        <p>Mom & Baby - 1023 Items</p>
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-3">
                            <span>Sort By:</span>
                            <select className="bg-gray-300 p-1 rounded-lg" name="" id="">
                                <option value="Default" selected>Default</option>
                                <option value="Default" selected>Low to High</option>
                                <option value="Default" selected>High to Low</option>
                                <option value="Default" selected>Popularity</option>
                              </select>
                          </div>
                          <div className="flex items-center gap-3">
                            <span>Show:</span>
                            <select className="bg-gray-300 p-1 rounded-lg" name="pagesize" id="">
                                <option value="Default" selected>10</option>
                                <option value="Default" selected>20</option>
                                <option value="Default" selected>30</option>
                                <option value="Default" selected>40</option>
                              </select>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-5">
                          {
                            books.map((book,index) => (<BookCard key={index} book={book} />))
                          }
                          {
                            books.map((book,index) => (<BookCard key={index} book={book} />))
                        }
                        <div className="col-span-4 flex items-center gap-10 justify-center">
                          <FaChevronLeft className=""/><div className='flex items-center gap-5'><span className="primary-btn">1</span><span>2</span><span>3</span><span>4</span></div><FaChevronRight className=""/>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                    <strong>You may also like</strong>
                  <div className="grid grid-cols-6 gap-5">
                    {books &&
                      books.map((book,index) => (<BookCard key={index} book={book} />))
                    }
                  </div>
                  </div>
    </div>
  )
}

export default category