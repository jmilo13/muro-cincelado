import React from "react"
import Head from 'next/head'
import Link from "next/link"

import CallToAction from '@components/CallToAction'
import { getAllPosts, getContentPost, renderBlock } from "lib/notion-functions"

export default function Post({ contentPost, currentPost}) {
    const { title, autor, autorUrl, date, category, imageUrl, imageAutor, imageAutorUrl, description, slug } = currentPost[0].properties
console.log(contentPost.results)
// console.log(currentPost)
    return (
        <React.Fragment>
        <Head>
            <meta property='og:type' content='article' />
            <meta property='og:title' content={title.title[0]?.plain_text}/>
            <meta property='og:description' content={description} />
            <meta property='og:image' content= {imageUrl.url} />
            <meta property='og:site_name' content='Muro Cincelado' />
        </Head>
        <article>
            {/* <NotionRenderer blockMap={post.results}/> */}
        </article>
        <article className='post'>
            <header className="post__title">
                <h1>{title.title[0]?.plain_text}</h1>
                <p className="post__title-image-info">Foto de <a href={imageAutorUrl.url} target="_blank">{imageAutor.rich_text[0]?.plain_text}</a></p>
            </header>
            <section className="post__body">
                <div className="post__metadata">
                    <p><Link href={autorUrl.select?.name || `/${slug.rich_text[0]?.plain_text}`}>{autor.select?.name||""}</Link></p>
                    <p>{date.date?.start}</p>
                    <p>{category.select?.name}</p>
                </div>
                <div className="post__content">
                    {
                    contentPost.results.map(item => {
                        const nextItem = contentPost.results[contentPost.results.indexOf(item)+1]?.type === item.type
                        return renderBlock(item, nextItem)
                    })} 
                    <strong>Si estas atravesando por alguna situación relacionada con este u otros temas y consideras que necesitas asistencia psicológica escríbeme. El cuidado de la salud mental es muy importante.</strong>
                    <div className="post__button">
                        <CallToAction
                            link="https://wa.me/message/V7KKKDIRGD62K1"
                            text= 'Contactar'
                            external={true}
                        />
                    </div>
                    
                </div>
            </section>
            <style jsx>
                {`
                .post__body{
                    max-width: 60rem;
                    margin: auto;
                    padding: 1.5rem;
                }
                .post__title{
                    min-height: 20rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: url(${imageUrl.url}) center/cover no-repeat fixed;
                    color: #fff;
                }
                .post__title::before{
                    position: absolute;
                    content: '';
                    top: 0;
                    bottom: 0;
                    width: 100%;
                    background: rgb(0 0 0 / 50%);
                }
                .post__title h1{
                    z-index: 0;
                    text-align: center;
                    max-width: 38rem;
                    padding: 2rem 1rem;
                }
                .post__title-image-info{
                    position: absolute;
                    right: 1rem;
                    bottom: -3rem;
                    color: black;
                    font-size: 0.8rem;
                }
                .post__metadata{
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin: 2rem 0;
                    font-size: 0.8rem;
                    opacity: 0.8;
                    text-align: center;
                }
                .post__button {
                    width: fit-content;
                    margin: 2rem auto
                }
                `}
            </style>
        </article>
        </React.Fragment>
    )
}

export async function getStaticProps ({params}){
    const posts = await getAllPosts()
    const currentPost = posts.filter(post=>post.properties.slug.rich_text[0].plain_text === params.slug)
    const contentPost = await getContentPost(currentPost[0].id)
    return {
        props: {contentPost, currentPost} 
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts()
    const paths = posts.map((post) => ({
        params: {
            slug: post.properties.slug.rich_text[0]?.plain_text || "",    
        }
    })
    )
    return {
        paths, 
        fallback: false
    }
}