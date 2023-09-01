import React from "react";
import { useGetNewBook } from '../Data/query';
import { useNavigate } from "react-router-dom";


const NewBook = () => {
    const newBooksQuery = useGetNewBook();
    const books = newBooksQuery?.data?.data?.books || [];
    const navigate = useNavigate()
    
    const handleClick = (id) => { 
        navigate(`/detail/${id}`);
    }

    const onAdd = (book) => { 
        const obj = JSON.parse(sessionStorage.getItem('cart') || "{}");
        obj[book.isbn13] = { ...book, cnt: (obj[book.isbn13]?.cnt || 0) + 1 };
        sessionStorage.setItem('cart', JSON.stringify(obj));
    }
    
    return (
        <div className='book-wrapper'>
            {books.map((book, i) => { 
                return (
                    <div className='card' key={i} >
                        <img src={book.image} alt={book.title} onClick={() =>handleClick (book?.isbn13)} />
                        <p className='price'>{book.price}</p>
                        <button className='add-btn' onClick={() => onAdd(book)}>Add</button>
                    </div>
                )
            })}
        </div>
    )
}

export default NewBook;