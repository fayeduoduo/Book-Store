import axios from "axios";

export const searchBookApi = (keyword) =>  
    axios.get(`https://api.itbook.store/1.0/search/${keyword}`);


export const getBook = (id) =>  
    axios.get(`https://api.itbook.store/1.0/books/${id}`)


export const getNewBook = () =>
    axios.get('https://api.itbook.store/1.0/new');
