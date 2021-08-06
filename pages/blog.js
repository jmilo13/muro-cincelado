import React from 'react'
import { getAllFilesMetadata } from "lib/mdx"
import BlogCard from '@components/BlogCard'

export default function blog({posts}) {
    console.log(posts)
    posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <React.Fragment>
            <section className="blog">
             <h1 className="blog__title">Últimos artículos</h1>
                {posts.map(post => {
                    const { title, date, category, imageURL, slug} = post
                    return (
                        <BlogCard 
                            key={slug}
                            title={title}
                            date={date}
                            category={category}
                            imageURL={imageURL}
                            slug={slug}
                        />
                    )
                })}            
                <style jsx>
                    {`
                    .blog{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        max-width: 60rem;
                        margin: auto;
                        padding: 3rem 2rem;
                        gap: 1rem;
                    }
                    .blog__title{
                        width: 100%
                    }
                `}
                </style>
            </section>
        </React.Fragment>
    )
  }

  export async function getStaticProps (){
    const posts = await getAllFilesMetadata()
    console.log({posts})
    return {
        props: {posts}
    }
}

