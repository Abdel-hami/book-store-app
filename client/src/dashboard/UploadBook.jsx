import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";


const UploadBook = () => {
    return (
        <div className='px-4 my-12 '>
            <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
            <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="book_title" value="book_title" />
                    </div>
                    <TextInput id="book_title" name='book_title' type="text" placeholder="Bok Name" required />
                </div>
            </form>
        </div>
    )
}

export default UploadBook