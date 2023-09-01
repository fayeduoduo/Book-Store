import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import '../Styles/cart.css';

const Cart = () => { 
    const Items = JSON.parse(sessionStorage.getItem('cart') || "{}");
    const [books, setBooks] = useState(Object.values(Items));

    const onClear = (id) => { 
        Items[id].cnt--;
        if (Items[id].cnt === 0) { 
            delete (Items[id]);
        }
        setBooks(Object.values(Items));
        sessionStorage.setItem('cart', JSON.stringify(Items))
    }
    
    return (
        <div className='cart-wrapper'>
            <h4 className='cart-title'>Shopping cart</h4>
            <div className='cart-content'>
                {books.map((book, k) => { 
                    return (
                        <div className='book-content' key={k}>
                            <img className='content-image' src={book.image} alt={book.title} />
                            <div className='content-title'><span>{book.title}</span></div>
                            <div className='content-price'><span>{book.price}</span></div>
                            <div className='content-count'><span>{book.cnt}</span></div>
                            <div className='clear-btn' onClick={() => onClear(book.isbn13)}>
                                <span><ClearIcon color='error' fontSize='small' /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='btn-wrapper'>
                <button className='check-btn'>Check out</button>
                <button variant="outlined"  className='cancel-btn'>Cancel</button>
            </div>
        </div>
    )
}
export default Cart;