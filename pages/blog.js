import React from 'react'
import Head from 'next/head'
import { getAllFilesMetadata } from "lib/mdx"
import BlogCard from '@components/BlogCard'

export default function blog({posts}) {
    posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return (
        <React.Fragment>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Algunos artículos relacionados con la sexualidad humana que te invito a leer. Espero los disfrutes y si tienes consultas no dudes en escribir"></meta>
                <meta property='og:image' content= '/image/logo-circle.png' />
            </Head>
            <section className="blog">
             <h1 className="blog__title">Últimos artículos</h1>
                {posts.map(post => {
                    const { title, date, category, imageURL, slug, autor} = post
                    return (
                        <BlogCard 
                            key={slug}
                            title={title}
                            date={date}
                            category={category}
                            imageURL={imageURL}
                            slug={slug}
                            autor={autor}
                        />
                    )
                })}            
                <style jsx>
                    {`
                    .blog{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        max-width: 70rem;
                        margin: auto;
                        padding: 3rem 2rem;
                        gap: 2rem;
                    }
                    .blog__title{
                        width: 100%;
                        text-align: center;
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

