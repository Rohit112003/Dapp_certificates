import React from 'react'
import { Link } from 'react-router-dom'
import birthCertif from "../assets/BirthCertificate.avif"
import changeDetail from "../assets/changeDetail.webp"
import Download from "../assets/d1.webp"
const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        {/* only show 3 columns when we go above 3 columns  */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-black  rounded-lg hover:scale-95 duration-300 '>
                <img src={birthCertif} className=' rounded-lg w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                <h1 className='text-l sm:text-xl text-white font-bold text-center py-8'>Birth Card for Indian Citizen/NR</h1>
                <Link to="/birthDetail"><button className='w-full text-center p-2 rounded-sm hover:font-bold bg-[#00df9a]'>click to apply</button></Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4  bg-black rounded-lg hover:scale-95 duration-300 '>
                <img src={changeDetail} className=' rounded-lg w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                <h1 className='text-l sm:text-xl text-white font-bold text-center py-8'>Birth Card Detail</h1>
                <Link to='/checkDetail'><button className='w-full text-center p-2 rounded-sm hover:font-bold bg-[#00df9a]'>click to apply</button></Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4  bg-black rounded-lg hover:scale-95 duration-300 '>
                <img src={Download} className=' rounded-lg w-20 h-[60px] mx-auto mt-[-3rem] bg-white' alt="" />
                <h1 className='text-l sm:text-xl text-white font-bold text-center py-8'>Download BirthCard</h1>
                <Link><button className='w-full text-center p-2 rounded-sm hover:font-bold bg-[#00df9a]'>click to apply</button></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Card