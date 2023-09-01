import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchBook } from '../Data/query';
import { useNavigate } from 'react-router-dom';
import '../Styles/search.css';

const Search = () => {
    const [inputVal, setInputVal] = useState('');
    const [searchKey, setSearchKey] = useState('mongodb');
    const booksQuery = useSearchBook(searchKey);
    //console.log(booksQuery)
    const books = booksQuery?.data?.data?.books || [];
    const navigate = useNavigate();

    const searchHandle = () => { 
        setSearchKey(inputVal);
    }
    const onChange = (e) => { 
        setInputVal(e.target.value);
    }

    const onBookClickHandler = (id) => { 
        navigate(`/detail/${id}`);
    }

    const onAddItem = (book) => { 
        const Item = JSON.parse(sessionStorage.getItem('cart') || '{}')
        Item[book.isbn13] = { ...book, cnt: (Item[book.isbn13]?.cnt || 0) + 1 }
        sessionStorage.setItem('cart', JSON.stringify(Item));
    }

    return (
        <div className='contents-wrapper'>
            <div className="searchBar-wrapper">
                <TextField id="outlined-basic"
                    variant="outlined"
                    onChange={onChange}
                    value={inputVal}
                />
                <SearchIcon className='search-icon' onClick={searchHandle} />
            </div>
            <div className='book-wrapper'>
                {books.map((book, i) => { 
                    return (
                        <div className='card' key={i} >
                            <img src={book.image} alt={book.title} onClick={() => onBookClickHandler(book?.isbn13)}/>
                            <p className='price'>{book.price}</p>
                            <button className='add-btn' onClick={() => onAddItem(book)}>Add</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Search;