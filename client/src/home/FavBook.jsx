import React from 'react'
import favbooksImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-cols md:flex-row items-center justify-between gap-14'>
        <div className='md:w-1/2'>
            <img src={favbooksImg} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-2'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your favorites 
            <span className='text-blue-700'> Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing
            elit, Deserunt suscipit officiis, accusantium dignissimos ratione natus quos velit harum
            blanditiis cum non odio sit culpa corporis molestias molestiae,
            ad, numquam laboriosam?</p>
            {/* stats div */}
            <div className='flex  flex-col md:flex-row items-center justify-between gap-6 md:w-3/4 py-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Download</p>
                </div>
            </div>

            <Link to={"/shop"} className='mt-12 block'>
                <button className='bg-blue-600 text-white p-4 rounded-md font-semibold hover:bg-black transition-all duration-300'>Explore Now</button>
            </Link>
        </div>
    </div>
  )
}

export default FavBook;