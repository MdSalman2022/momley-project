import Image from 'next/image'
import {FaExclamationCircle} from 'react-icons/fa'

const Login = () => {
  return (
    <div className='fixed z-10 inset-0 overflow-auto hidden'>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
       <div className="flex items-center justify-center min-h-screen gap-5">
       <div className="flex flex-col items-center justify-center  bg-[#ffffff] sm:max-w-2xl z-50  p-5 rounded-lg border">
          <Image className="" src="https://i.ibb.co/TW8T2kc/logo-momley.png" width={180} height={56} />
          <div className="flex">
            <span className="flex justify-center text-xl w-40 p-3 border-l-8 border-black bg-[#ffffff]">Sing In</span>
            <span className="flex justify-center text-xl w-40 p-3 bg-[#f5f5f5]">Register</span>
          </div>
          <div className="flex flex-col gap-2">
            <input className="input-box h-12 border-[#f5f5f5]" placeholder="Phone Number" type="text" />
            <input className="input-box h-12 border-[#f5f5f5]" placeholder="Please enter your password" type="text" />
            <input className="input-box h-12 border-[#f5f5f5] hidden" placeholder="First Name" type="text" />
            <input className="input-box h-12 border-[#f5f5f5] hidden" placeholder="Last Name" type="text" />
            <input className="input-box h-12 border-[#f5f5f5] hidden" placeholder=" Phone Number" type="text" />
            <p className="flex justify-end">Forget Password?</p>
          </div>
          
          <button className="primary-btn w-full h-12 hidden">SEND CODE</button>
          <button className="primary-btn w-full h-12">SIGN IN</button>
          <div className="flex items-start gap-2"><FaExclamationCircle className="text-xl mt-1"/> By continuing, you agree to Momley's <br />Conditions of Use and Privacy Policy</div>
        </div>
       </div>
    </div>
  )
}

export default Login