import React from 'react'
import Link from 'next/link'

export default function BlogCard (props){
    const { title, date, category, imageURL, slug} = props
    return(
    <Link href={`/${slug}`}>
        <div className="blog-card">
            <div className="blog-card__details">
            <h3>{title}</h3>
                <p>{date}</p>
                <p>{category}</p>
            </div>
            
            <style jsx>
                {`
                .blog-card{
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    width: 90%;
                    max-width: 18rem;
                    height: 25rem;
                    box-shadow: 0px 0px 9px 0px;
                    transition: all 500ms;
                    cursor: pointer;
                    background: url(${imageURL}) center/cover no-repeat;           
                    border-radius: 1rem; 
                }
                .blog-card:hover {
                    transform: scale(1.05);
                }
                .blog-card__details {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.9) 0%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    color: #fff;
                    border-radius: 0 0 1rem 1rem;
                }
                `}
            </style>
        </div>
    </Link>
    )
}