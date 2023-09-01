import React, { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Popover, Link } from '@mui/material';
import Cart from './Cart';
import '../Styles/header.css';

const Links = [
    { title: 'Hot', url: '/#/hot' },
    { title: 'Best Seller', url: '/#/best-seller' },
    { title: 'Kids', url: '/#/kids' },
    { title: 'New Release', url: '/#/newBook' }
]
const Header = () => { 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => { 
        setAnchorEl(e.currentTarget);
    }
    
    const handleClose = () => { 
        setAnchorEl(null);
    }

    return (
        <div className='header-wrapper'>
            <h1 className='title'>
                <MenuBookIcon fontSize='large' className='book-icon'/>
                <Link href='/' underline='none' color='any'>BookShop</Link>
            </h1>
            <div className='navigation'>
                <ul className='link-list'>
                    {Links.map((link, k) => { 
                        return (
                            <Link key={k} href={link.url} underline='none' color='any'>{link.title}</Link>
                        )
                    })}
                </ul>
                <span className='sign-in'><a href='/#/sign-in'>Sign in</a></span>
                <ShoppingCartIcon className='cart' onClick={handleClick} />
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Cart />
                 </Popover>
            </div>
        </div>
    )
}
export default Header;