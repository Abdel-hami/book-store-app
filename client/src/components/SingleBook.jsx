import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id,author_name,image_url,book_description,book_title} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={image_url} alt="" className='h-96'/>
      <h2>{book_title}</h2>
    </div>
  )
}

export default SingleBook