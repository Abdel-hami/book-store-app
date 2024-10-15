import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='bg-teal-100 px-4 lg:px-24 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between py-40 items-center gap-12'>
            {/** div left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>For The Best Prices</span></h2>
                <p className='md:w-4/5'> classLorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quo sed amet esse? Fuga quaerat, delectus odio fugiat aut d
                     oloremque. Fuga, blanditiis voluptate natus minima ad 
                      rerum quasi quidem sint?
                </p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 
                    px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            {/** div right side */}
            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner