import React from 'react'
import PromoImg from "../assets/awardbooks.png"
import { Link } from 'react-router-dom'
const PromoBanner = () => {
  return (
    <div className='bg-teal-100 px-4 lg:px-24'>
        <div className='py-10 mt-16 flex flex-col md:flex-row items-center justify-between gap-12'>
            {/* text section*/}
            <div className=" md:w-1/2 space-y-6">
                <h3 className='capitalize text-4xl font-bold leading-snug mb-6'>2023 National Book awards for fiction shortlist</h3>
                <Link to={"/shop"}><button className='bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-black transition-all duration-300'>Explore Now</button></Link>
            </div>
            {/* image section */}
            <div>
                <img src={PromoImg} 
                alt=""
                className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner