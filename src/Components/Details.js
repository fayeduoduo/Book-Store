import React from "react";
import { useParams } from 'react-router-dom';
import { useGetBook } from "../Data/query";
import '../Styles/detail.css';

const Details = () => { 
    const { id } = useParams(); 
    const bookContentQuery = useGetBook(id);
    const content = bookContentQuery?.data?.data;
    
    return (
        <div className="detail-wrapper">
            <h2>{content?.title}</h2>
            <div className='more-detail'>
                <div className='book-img'><img  src={content?.image} alt={content?.title} /></div>
                <div className='grid-content'>
                    <div className='detail-content'>
                        <span className='authors-title'> Authors:</span>
                        <span className='detail-content'>{content?.authors}</span>
                    </div>
                    <div className='detail-content'>
                        <span className='book-year-title'>Year:</span>
                        <span className='detail-content'>{content?.year}</span> 
                    </div>
                    <div className='detail-content'>
                        <span className='subtitle-name'>Subtitle:</span> 
                        <span className='detail-content'>{content?.subtitle}</span>
                    </div>
                    <div className='detail-content'>
                        <span className='book-desc-title'>Description:</span>
                        <span className='detail-content'>{content?.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;