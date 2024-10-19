import { Card } from 'flowbite-react';
import React, { useEffect , useState} from 'react'

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {setBooks(data)})
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center capitalize'>all books are here</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-12 '>
        {
          books.map(book => <Card
          key={book._id}
            className="max-w-sm">
            <img width={500} height={500} src={book.image_url} className='h-64' alt="image 1" />
          
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {
              book.book_title
             }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
               {
                book.book_description.slice(0,300)
               }
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Shop Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop;