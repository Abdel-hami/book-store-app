import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';



const EditBooks = () => {
  const { id } = useParams();
  const { book_title, author_name, image_url, book_description, category, book_pdf_url } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Progrmming",
    "Fantasy",
    "Horror",
    "Bibliography",
    "History",
    "Business"
  ]
  const [selectBookCategory, setselectBookCategory] = useState(bookCategories[0])
  const handleChangeSelector = (event) => {
    // console.log(event.target.value);
    setselectBookCategory(event.target.value)
  }


  // handle Book Submision
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.book_title.value;
    const authorName = form.author_name.value;
    const bookDescription = form.book_description.value;
    const category = form.inputState.value;
    const imageUrl = form.image_url.value;
    const bookPdf = form.book_pdf_url.value;

    const handelObj = {
      bookTitle,
      authorName,
      bookDescription,
      category,
      imageUrl,
      bookPdf
    }

    //update boook data
    fetch(`http://localhost:5000/book/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(handelObj)
      })
      .then(res => res.json())
      .then(data => {
        alert("book Updated succesfully");
      })
  }


  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput id="book_title" name='book_title' type="text" placeholder="Book Name" defaultValue={book_title} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="author_name" value="Author Name" />
            </div>
            <TextInput id="author_name" name='author_name' type="text" placeholder="Enter Book Author" defaultValue={author_name} required />
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Book Image URL" />
            </div>
            <TextInput id="image_url" name='image_url' type="text" placeholder="Book Image URL" defaultValue={image_url} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select name="inputState" id="categoryName" className="w-full rounded" value={selectBookCategory} defaultValue={bookCategories} onChange={handleChangeSelector}>
              {
                bookCategories.map((option) => <option key={option} value={option}>
                  {option}
                </option>)
              }
            </Select>
          </div>
        </div>
        {/* third row */}
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea id="book_description" name="book_description" placeholder="Enter Book Description..." defaultValue={book_description} required rows={4} />
        </div>
        {/* fourth row */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_pdf_url" value="Book URL" />
          </div>
          <TextInput id="book_pdf_url" name='book_pdf_url' type="text" placeholder="Book odf URL" defaultValue={book_pdf_url} required />
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  )
}

export default EditBooks