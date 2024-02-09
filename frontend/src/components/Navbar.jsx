import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/G20Logo.png";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useStateContext } from "../Context";
import {  metamaskWallet } from "@thirdweb-dev/react";
const metamaskConfig = metamaskWallet();

const Navbar = () => {
  const [Account, setAccount] = useState("connect");
  const { connect, address } = useStateContext();
  const[nav,setNav] = useState(true);
    const handleNav = ()=>{
        setNav(!nav);
    }
  const handlerFunction =  async () => {
    if(address){

      setAccount(address.slice(0, 5) + "..." + address.slice(-3))
    }else{
      const wallet = await connect(metamaskConfig);
      setAccount(address)
      console.log(wallet)
    }


      
  };
  return (
    <section className=" m-0 sticky top-0  ">
      <div className="flex  min-h-16 items-center lg:justify-between  justify-around sm:text-xl text-sm bg-black p-2 ">
        <img src={image} alt="img" className="m-0 w-[79px] h-[49px] p-1 animate-bounce" />
        <h1 className="md:text-3xl text-lg text-white font-serif font-bold">Birth CertiFicate Portal</h1>
        <div className="flex justify-center items-center gap-16 max-lg:hidden text-white  ">
          <Link className="hover:underline underline-offset-4" to="/">
            Home
          </Link>
          <Link
            className="hover:underline underline-offset-4"
            to="/birthDetail"
          >
            BirthAdd
          </Link>
          <Link
            className="hover:underline underline-offset-4"
            to="/checkDetail"
          >
            CheckDetail
          </Link>
          <button
            onClick={handlerFunction}
            className="border border-sky-500 p-2 m-2 rounded-md  transition ease-in-out delay-150 bg-[#00df9a] hover:-translate-y-1 hover:scale-110 duration-300"
          >
            {Account}
          </button>
        </div>
        <div onClick={handleNav} className='hidden max-lg:block'>
            {!nav ? <AiOutlineClose size={20} className="text-white"/>  : <AiOutlineMenu size={20} className="text-white"/> }
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[50%] h-full rounded-sm border-r  max-lg:block border-r-gray-900 bg-[#000000] ease-in-out duration-500 ': 'fixed left-[-100%] z-30' }>
        
        <div className="flex flex-col  justify-center items-center gap-16 mt-20 text-white   ">
          <Link className="p-4 border-b border-gray-600 text-white" to="/">
            Home
          </Link>
          <Link
            className="p-4 border-b border-gray-600"
            to="/BirthDetail"
          >
            BirthAdd
          </Link>
          <Link
            className="p-4 border-b border-gray-600"
            to="/checkDetail"
          >
            CheckDetail
          </Link>
          <button
            onClick={handlerFunction}
            className="border border-sky-500 p-2 m-2 rounded-md  transition ease-in-out delay-150 bg-[#00df9a] hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Connect
          </button>
        </div>
        </div>
        </div>

    </section>
  );
};

export default Navbar;
