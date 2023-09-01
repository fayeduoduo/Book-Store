import { useQuery } from "react-query";
import { searchBookApi, getBook, getNewBook} from './api';

export const useSearchBook = (keyword, options = {}) =>
    useQuery({
        queryKey: ['useSearchBook'],
        queryFn: () => searchBookApi(keyword),
        ...options,
    });

export const useGetBook = (id, options = {}) => 
    useQuery({
        queryKey: ['useGetBookDetail'],
        queryFn: () => getBook(id),
        ...options
    })

    export const useGetNewBook = (options = {}) => 
    useQuery({
        queryKey: ['useGetNewBook'],
        queryFn: () => getNewBook(),
        ...options
    })

