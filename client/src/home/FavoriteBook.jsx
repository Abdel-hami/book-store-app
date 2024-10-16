import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

const FavoriteBook = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/all-books")
        .then(res=>res.json())
        .then(data => setBooks(data))
    }, [])
  return (
    <div>
        <BookCard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavoriteBook