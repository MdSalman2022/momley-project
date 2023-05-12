"use client"
import BookCard from '@/app/components/BookCard'
import Login from '@/app/components/Login'
import LoadingPage from '@/app/loading'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaMinus, FaPlus, FaTwitter,FaShippingFast, FaStar, FaStarHalf } from 'react-icons/fa'
import { MdOutlineSecurityUpdateGood } from 'react-icons/md'
import {SiMoneygram} from 'react-icons/si' 
 
const details = ({params}) => {

  console.log(params)

  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
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

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`/api/book/${params.id}`);
      const data = await res.json();
      setBookDetails(data);
      setLoading(false);
    };

    fetchBook();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
     
  console.log(bookDetails) 


  return (
      <div>
          <p className="py-5">Home/Categories/Mom & Baby</p>
          <Login/>
          <div className="grid grid-cols-4">
              <div className="col-span-3 grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-5">
                    <Image className="object-cover" src={bookDetails.image} width={360} height={400} />
                      <div className="flex items-center gap-5">
                        <Image src="https://i.ibb.co/VJJW1pv/image.png" width={75} height={120} />
                        <Image src="https://i.ibb.co/VJJW1pv/image.png" width={75} height={120} />
                        <Image src="https://i.ibb.co/VJJW1pv/image.png" width={75} height={120} />
                        <Image src="https://i.ibb.co/VJJW1pv/image.png" width={75} height={120} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <h2 className='text-2xl'>{bookDetails.name}</h2>
                      <div className="text-4xl text-red-500 font-bold">Tk {bookDetails.price}</div>
                      <p>Writer: {bookDetails.writer}</p>
                      <p>Publisher: Sabil Publication</p>
                      <p>Category: Sirate Rasul</p>
                      <div className="flex gap-2">
                          <p>Availability: <span className='text-green-500'>In Stock</span></p>
                          <p><span className='font-semibold'>SUK:</span>123456</p>
                      </div>
                      <div className="primary-btn w-fit">Offer Ends in: 2 days 09:20:30</div>
                      <p>Quantity</p>
                      <div className="flex items-center gap-3">
                          <span className="p-2 border"><FaMinus/></span>
                          <span>1</span>
                          <span className="primary-btn"><FaPlus/></span>
                      </div>
                      <div className="flex gap-10">
                        <div className="primary-outline-btn">Add to cart</div>
                        <div className="primary-btn">Buy Now</div>
                      </div>
                      <p className="flex items-center gap-5">Share: 
                        <FaFacebookF className="bg-blue-500 p-1 text-3xl rounded-full text-white"/> 
                        <FaTwitter className="bg-sky-500 p-1 text-3xl rounded-full text-white"/> 
                        <FaInstagram className="bg-pink-500 p-1 text-3xl rounded-full text-white"/>
                      </p>
                  </div>
                  <div className="col-span-2 flex flex-col py-10">
                    <div className="flex gap-10 py-5">
                      <span className="border-b-2 border-black">Description</span>
                      <span className="">Additional information</span>
                      <span className="">Review</span>
                    </div>
                    <div className="flex flex-col gap-5 mr-2">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos in non doloribus facilis repellendus beatae nam ipsa vitae cum ad, eum nemo accusamus maiores voluptas, vel dolore veniam sunt. Repudiandae impedit, fugit laudantium ipsam, sint explicabo quaerat nam officiis eum ad enim, consequatur inventore accusamus! Necessitatibus accusamus neque ex blanditiis.</p>

                      <p className="text-xl">Specification</p>
                      <div>
                        <div className="grid grid-cols-4">
                          <span>Material</span>
                          <span className="col-span-2">ABC</span>
                        </div>
                        <div className="grid grid-cols-4">
                          <span>Claimed Size</span>
                          <span className="col-span-2">ABC</span>
                        </div>
                        <div className="grid grid-cols-4">
                          <span>Recommended Use</span>
                          <span className="col-span-2">ABC</span>
                        </div>
                        <div className="grid grid-cols-4">
                          <span>Manufacturer</span>
                          <span className="col-span-2">ABC</span>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam, tempore facere nobis nesciunt tenetur dolor laudantium culpa commodi? Eius impedit, delectus veniam, veritatis eaque maxime non atque ullam minus ut quia deserunt ex amet quo et neque alias nesciunt, asperiores voluptates itaque? Reprehenderit nostrum libero eos voluptatum delectus commodi.</p>
                    </div>
                  </div>
              </div>
              <div className="col-span-1 flex flex-col gap-5">
                  <div className="flex flex-col gap-3 text-sm border p-5">
                    <div className="flex flex-nowrap items-center gap-5 py-3 border-b">
                      <MdOutlineSecurityUpdateGood className="text-3xl"/>
                      <div className="flex flex-col">
                        <p className="font-semibold">SECURED PAYMENT</p>
                        <p>We ensure secure payment</p>
                      </div>
                    </div>
                    <div className="flex flex-nowrap items-center gap-5 py-3 border-b">
                      <FaShippingFast className="text-3xl"/>
                      <div className="flex flex-col">
                        <p className="font-semibold">FREE SHIPPING</p>
                        <p>ON ALL Tk above 700 TK</p>
                      </div>
                    </div>
                    <div className="flex flex-nowrap items-center gap-5 py-3 ">
                      <SiMoneygram className="text-3xl"/>
                      <div className="flex flex-col">
                        <p className="font-semibold">MONEY BACK GUARANTEE</p>
                        <p>Any back within 7 days  </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Review</p>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col items-start gap-2">
                        <p>121 Customers</p>
                        <p className="text-6xl">4.6</p>
                        <span className="flex items-center text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></span>
                        <p>out of 5</p>
                      </div>
                      <div className="flex flex-col items-center gap-5">
                        <p>Rating</p>
                        <div>
                          <div className="flex items-start gap-5">
                            <p>5</p>
                            <span className="h-5 w-32 p-2 bg-green-500"></span>
                          </div>
                          <div className="flex items-start gap-5">
                            <p>4</p>
                            <span className="h-5 w-28 p-2 bg-blue-500"></span>
                          </div>
                          <div className="flex items-start gap-5">
                            <p>3</p>
                            <span className="h-5 w-10 p-2 bg-orange-500"></span>
                          </div>
                          <div className="flex items-start gap-5">
                            <p>2</p>
                            <span className="h-5 w-5 p-2 bg-yellow-500"></span>
                          </div>
                          <div className="flex items-start gap-6">
                            <p>1</p>
                            <span className="h-5 w-2 p-2 bg-red-500"></span>
                          </div>
                        </div>
                      </div>

                    </div>

                    
                  </div>

                  {/* Recommended Products  starts*/}
                  <div className="flex flex-col gap-5">
                    <p className="input-box rounded-none">Recommended for you</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col justify-between gap-3">
                        <Image className="object-cover" src="https://i.ibb.co/VJJW1pv/image.png" width={90} height={70} />
                        <div className="flex items-center rounded-sm justify-between border border-black">
                          <span className="flex items-center rounded-sm-l border-black justify-center w-12 h-10 border-r"><FaMinus/></span>
                          <span className="flex items-center justify-center w-12 h-10 ">1</span>
                          <span className="flex items-center rounded-sm-r border-black justify-center bg-gray-500 text-white w-12 h-10 border-l"><FaPlus/></span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between col-span-2 gap-2">
                        <p>Product Name</p>
                        <p>Price: 230</p>
                        <span className="flex items-center text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span className="text-xs text-black">(15 reviews)</span></span>
                        <button className="primary-outline-btn flex items-center justify-center rounded-sm"><BsCartPlus className="text-xl"/>Add to Bag</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col justify-between gap-3">
                        <Image className="object-cover" src="https://i.ibb.co/VJJW1pv/image.png" width={90} height={70} />
                        <div className="flex items-center rounded-sm justify-between border border-black">
                          <span className="flex items-center rounded-sm-l border-black justify-center w-12 h-10 border-r"><FaMinus/></span>
                          <span className="flex items-center justify-center w-12 h-10 ">1</span>
                          <span className="flex items-center rounded-sm-r border-black justify-center bg-gray-500 text-white w-12 h-10 border-l"><FaPlus/></span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between col-span-2 gap-2">
                        <p>Product Name</p>
                        <p>Price: 230</p>
                        <span className="flex items-center text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span className="text-xs text-black">(15 reviews)</span></span>
                        <button className="primary-outline-btn flex items-center justify-center rounded-sm"><BsCartPlus className="text-xl"/>Add to Bag</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col justify-between gap-3">
                        <Image className="object-cover" src="https://i.ibb.co/VJJW1pv/image.png" width={90} height={70} />
                        <div className="flex items-center rounded-sm justify-between border border-black">
                          <span className="flex items-center rounded-sm-l border-black justify-center w-12 h-10 border-r"><FaMinus/></span>
                          <span className="flex items-center justify-center w-12 h-10 ">1</span>
                          <span className="flex items-center rounded-sm-r border-black justify-center bg-gray-500 text-white w-12 h-10 border-l"><FaPlus/></span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between col-span-2 gap-2">
                        <p>Product Name</p>
                        <p>Price: 230</p>
                        <span className="flex items-center text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span className="text-xs text-black">(15 reviews)</span></span>
                        <button className="primary-outline-btn flex items-center justify-center rounded-sm"><BsCartPlus className="text-xl"/>Add to Bag</button>
                      </div>
                    </div>

                     

                     
                  </div>
                  {/* Recommended Products  ends*/}
              </div>
              <p className="text-xl font-semibold">Related Products</p>
              <div className="col-span-4 grid grid-cols-6 gap-5 pt-5">
                {
                  books.map((book,index)=> (<BookCard book={book}/>))
                }
              </div>

          </div>
    </div>
  )
}

export default details