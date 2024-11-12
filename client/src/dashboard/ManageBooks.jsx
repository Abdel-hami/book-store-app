import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
  }, [])
  // Delete a Book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(data => {
      alert("book has been deleted succesfuly")
      // setAllBooks(data);  
    })
  }
  return (
    <div className='px-44 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage your Books</h2>
      {/* table */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
          
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body key={book._id} className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.book_title}
              </Table.Cell>
              <Table.Cell>{book.author_name}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-6">
                  Edit
                </Link>
                <button onClick={()=> handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-cyan-600'>
                  Delet
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
    </Table>
    </div >
  )
}

export default ManageBooks