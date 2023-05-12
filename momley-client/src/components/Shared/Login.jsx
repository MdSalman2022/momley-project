import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col gap-5 items-center justify-center  bg-[#ffffff] sm:max-w-2xl  rounded-lg border p-5">
      <img
        className=""
        src="https://i.ibb.co/TW8T2kc/logo-momley.png"
        width={180}
        height={56}
      />
      <div className="flex">
        <span
          onClick={() => setIsLogin(true)}
          className={`flex justify-center text-xl w-40 p-3 cursor-pointer hover:bg-[#f5f5f5] hover:border-l-8 border-black ${
            isLogin
              ? " border-l-8 border-black bg-[#ffffff]"
              : "bg-[#f5f5f5] border-none"
          }}`}
        >
          Sign In
        </span>
        <span
          onClick={() => setIsLogin(false)}
          className={`flex justify-center text-xl w-40 p-3 cursor-pointer hover:bg-[#f5f5f5] hover:border-l-8 border-black ${
            !isLogin
              ? "border-l-8 border-black bg-[#ffffff]"
              : "bg-[#f5f5f5] border-none"
          }}`}
        >
          Register
        </span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {isLogin && (
          <input
            className="input-box h-12 w-full border-[#f5f5f5]"
            placeholder="Phone Number"
            type="text"
          />
        )}
        {isLogin && (
          <input
            className="input-box h-12  w-full border-[#f5f5f5]"
            placeholder="Please enter your password"
            type="text"
          />
        )}
        {!isLogin && (
          <input
            className="input-box h-12 border-[#f5f5f5] "
            placeholder="First Name"
            type="text"
          />
        )}
        {!isLogin && (
          <input
            className="input-box h-12 border-[#f5f5f5] "
            placeholder="Last Name"
            type="text"
          />
        )}
        {!isLogin && (
          <input
            className="input-box h-12 border-[#f5f5f5] "
            placeholder=" Phone Number"
            type="text"
          />
        )}
        {!isLogin && (
          <input
            className="input-box h-12  w-full border-[#f5f5f5]"
            placeholder="Please enter your password"
            type="text"
          />
        )}
        <p className="flex justify-end hover:underline cursor-pointer">
          Forget Password?
        </p>
      </div>

      <button className="primary-btn w-full h-12 hidden">SEND CODE</button>
      <button className="primary-btn w-full h-12">SIGN IN</button>
      <div className="flex items-start gap-2">
        <FaExclamationCircle className="text-xl mt-1" /> By continuing, you
        agree to Momley's <br />
        Conditions of Use and Privacy Policy
      </div>
    </div>
  );
};

export default Login;
