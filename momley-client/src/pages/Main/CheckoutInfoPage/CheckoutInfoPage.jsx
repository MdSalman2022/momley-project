import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckoutInfoPage = () => {
  return (
    <div className="py-5 bg-[#FCFBFA]">
      <div className="grid grid-cols-6 gap-10  container mx-auto">
        <div className="col-span-2 flex flex-col border h-full p-5 bg-white">
          <p>Customer Information</p>
          <form className="mt-5" action="">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1">
                <label>
                  <span>First Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>

              <div className="col-span-1">
                <label>
                  <span>Last Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-2">
                <label>
                  <span>Phone Number*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-2">
                <label>
                  <span>Email*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-2">
                <label>
                  <span>Region*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-1">
                <label>
                  <span>City*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-1">
                <label>
                  <span>Area*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-1">
                <label>
                  <span>Address*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
              <div className="col-span-1">
                <label>
                  <span>Comment</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-box w-full border-[#EEEEEE]"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="grid grid-cols-6 py-3 px-5 text-[#BDBDBD] bg-[#F2F2F2] w-full ">
              <div className="col-span-2">
                Product Details <span className="text-xs">(2 items)</span>
              </div>
              <div>Unit Price</div>
              <div>Quantity</div>
              <div>Total Price</div>
              <div>Action</div>
            </div>
            <div className="product-list mb-5">
              <div className="bg-white grid grid-cols-6 place-content-center px-5 py-3 shadow">
                <div className="col-span-2 flex items-center gap-5">
                  <img
                    className=""
                    src="https://i.ibb.co/025tpgM/image.png"
                    width={80}
                    height={80}
                  />
                  <div>Lorem ipsum dolor sit amet</div>
                </div>
                <p className="flex items-center">485</p>
                <div className="flex items-center gap-3">
                  <span className="">
                    <FaMinus />
                  </span>
                  <span>1</span>
                  <span className="">
                    <FaPlus />
                  </span>
                </div>
                <p className="flex items-center">485</p>
                <div className="flex items-center">
                  <button className="flex text-3xl text-red-500">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="border border-[#EEEEEE] shadow-sm p-5 rounded">
                <p className="font-semibold">Payment Methods</p>
                <div className="form-control w-fit">
                  <label className="label cursor-pointer gap-3">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Online Payment</span>
                  </label>
                </div>
                <div className="form-control w-fit">
                  <label className="label cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <span className="label-text">Cash On Delivery</span>
                  </label>
                </div>
              </div>
              <div className="border border-[#EEEEEE] shadow-sm p-5 rounded">
                <p className="font-semibold">Delivery Methods</p>
                <div className="form-control w-fit">
                  <label className="label cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <span className="label-text">Home Delivery in Dhaka</span>
                    <span className="label-text">৳50.00</span>
                  </label>
                </div>
                <div className="form-control w-fit">
                  <label className="label cursor-pointer gap-3">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">
                      Home Delivery in Dhaka Outside
                    </span>
                    <span className="label-text">৳ 120.00</span>
                  </label>
                </div>
                <div className="form-control w-fit">
                  <label className="label cursor-pointer gap-3">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Store Pickup</span>
                    <span className="label-text">৳ 0.00</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-white grid grid-cols-6 p-6 shadow">
              <div className="col-span-4">
                <p className="font-bold">Order Summary</p>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-5">
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold">Subtotal (2 items)</p>
                    <p className="font-semibold">Shipping Charge</p>
                    <input
                      className="input-box h-10"
                      type="text"
                      placeholder="Coupon Code"
                    />
                    <p className="font-semibold">Grand Total</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>1,220.00</p>
                    <p>50.00</p>
                    <button className="primary-outline-btn">Apply</button>
                    <p>1,170.00</p>
                  </div>
                </div>
                <Link to="/checkout/successfull" className="col-span-2">
                  <button className="primary-btn w-full">Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfoPage;
