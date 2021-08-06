import React from 'react'
import Link from 'next/link'

export default function BlogCard (props){
    const { title, date, category, imageURL, slug, autor} = props
    const newDate = new Date(date)
    const formattedDate = newDate.getDate()
    return(
    <Link href={`/${slug}`}>
        <div className="blog-card">
            <div className="blog-card__details">
                <h3>{title}</h3>
                <div className= "blog-card__metadata">
                    <span className="blog__autor">
                        <Link href="/psicologo-camilo-gonzalez"><a>{autor}</a></Link>
                    </span>
                    <span className="blog__date">{date}</span>
                    <span className="blog__category">{category}</span>
                </div>
            </div>
            
            <style jsx>
                {`
                .blog-card{
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    width: 100%;
                    max-width: 18.5rem;
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
                    padding: 3rem 1rem 1rem 1rem;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.9) 0%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    color: var(--letter-on-dark);
                    border-radius: 0 0 1rem 1rem;
                }
                .blog-card__metadata{
                    display: flex;
                    column-gap: 1rem;
                    flex-wrap: wrap;
                }
                .blog__autor{
                    width: 100%;
                }
                .blog__autor a{
                    color: var(--letter-on-dark);
                }
                .blog__autor a:hover{
                    color: var(--primary-color)
                }
                `}
            </style>
        </div>
    </Link>
    )
}