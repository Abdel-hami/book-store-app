import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from "flowbite-react";


const UploadBook = () => {
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
    const handleBookSubmision = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.book_title.value;
        const authorName = form.author_name.value;
        const bookDescription = form.book_description.value;
        const category = form.inputState.value;
        const imageUrl = form.image_url.value;
        const bookPdf = form.book_pdf_url.value;

        const handlObj = {
            bookTitle,
            authorName,
            bookDescription,
            category,
            imageUrl,
            bookPdf
        }
        // console.log(handlObj)
        // send this data to data base
        fetch('http://localhost:5000/book-upload', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(handlObj)
        })
            .then(res => res.json())
            .then(data => {
                alert("book uploaded succesfully");
                form.reset();
            })
    } 

    return (
        <div className='px-4 my-12 '>
            <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
            <form
                onSubmit={handleBookSubmision}
                className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="book_title" value="Book Title" />
                        </div>
                        <TextInput id="book_title" name='book_title' type="text" placeholder="Book Name" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="author_name" value="Author Name" />
                        </div>
                        <TextInput id="author_name" name='author_name' type="text" placeholder="Enter Book Author" required />
                    </div>
                </div>
                {/* second row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="image_url" value="Book Image URL" />
                        </div>
                        <TextInput id="image_url" name='image_url' type="text" placeholder="Book Image URL" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select name="inputState" id="categoryName" className="w-full rounded" value={selectBookCategory} onChange={handleChangeSelector}>
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
                    <Textarea id="book_description" name="book_description" placeholder="Enter Book Description..." required rows={4} />
                </div>
                {/* fourth row */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="book_pdf_url" value="Book URL" />
                    </div>
                    <TextInput id="book_pdf_url" name='book_pdf_url' type="text" placeholder="Book odf URL" required />
                </div>
                <Button type="submit" className='mt-5'>Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBook