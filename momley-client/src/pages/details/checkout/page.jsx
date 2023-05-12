import Image from 'next/image'
import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import { BsCartPlus } from 'react-icons/bs'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {MdDeleteForever} from 'react-icons/md'

const Checkout = () => {
  return (
    <div className='pb-20 pt-5'>
        <div className='flex flex-col gap-5'>
            <span className='py-3 px-5 text-white bg-gray-500 w-full'>Delivery Address</span>
            
            <div className='flex justify-between px-5'>
                <div className='flex items-center gap-5'>
                    <BiHomeAlt className='text-3xl'/>
                    <div>
                        <p>Omar Faaruk - 091852322423</p>
                        <p>Siis COnsulting, 3rd FLoor, Akmol</p>
                        <p>Quarter, DEmra, DHaka - South, DHaka</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className="primary-btn flex items-center justify-center h-12 w-60 gap-2"><BsCartPlus className="text-xl"/>Add New Address</button>
                </div>
            </div>
            <div className="grid grid-cols-6 py-3 px-5 text-white bg-gray-500 w-full">
                <div className='col-span-2'>
                    Product Details <span className='text-xs'>(2 items)</span>
                </div>
                <div>
                    Unit Price
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    Total Price
                </div>
                <div>
                    Action
                </div>
            </div>
            <div className='bg-[#FBFBFB] grid grid-cols-6 items-center px-5 py-3'>
                <div className='col-span-2 flex items-start gap-5'> 
                    <Image className="" src="https://i.ibb.co/025tpgM/image.png" width={80} height={80} />
                    <div>
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <p>485</p>
                <div className="flex gap-3">
                    <span className=""><FaMinus/></span>
                    <span>1</span>
                    <span className=""><FaPlus/></span>
                </div>
                <p>485</p>
                <div className='flex'>
                    <button className="flex text-3xl text-red-500"><MdDeleteForever/></button>
                </div>
            </div>
            <div className='bg-[#FBFBFB] grid grid-cols-6 px-5 py-3'>
                <div className='col-span-2 flex items-start gap-5'> 
                    <Image className="" src="https://i.ibb.co/025tpgM/image.png" width={80} height={80} />
                    <div>
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <p>485</p>
                <div className="flex gap-3">
                    <span className=""><FaMinus/></span>
                    <span>1</span>
                    <span className=""><FaPlus/></span>
                </div>
                <p>485</p>
                <div className='flex'>
                    <button className="flex text-3xl text-red-500"><MdDeleteForever/></button>
                </div>
            </div>
            <div className='bg-[#F6F6F6] grid grid-cols-6 p-10'>           
                  <div className="col-span-4">
                    <p>Order Summary</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-5">
                      <div className="flex flex-col gap-3">
                          <p className='font-semibold'>Subtotal (2 items)</p>
                          <p className='font-semibold'>Shipping Charge</p> 
                          <input className='input-box' type="text" placeholder='Coupon Code' />
                          <p className='font-semibold'>Grand Total</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p>1,220.00</p>
                        <p>50.00</p>
                        <button className='primary-outline-btn'>Apply</button>
                        <p>1,170.00</p>
                      </div>
                      <div className="col-span-2">
                          <button className='primary-btn w-full'>Place Order</button>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout