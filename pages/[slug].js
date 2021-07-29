import React from "react"
import { getFileBySlug, getFiles } from "lib/mdx"
import { MDXRemote } from "next-mdx-remote"
import Link from "next/link"
import CallToAction from '@components/CallToAction'

export default function Post({ source, frontmatter }) {
    const { title, autor, autorURL, date, category, imageURL, imageAutor, imageAutorURL } = frontmatter
    return (
        <article className='post'>
            <header className="post__title">
                <h1>{title}</h1>
                <p className="post__title-image-info">Foto de <a href={imageAutorURL} target="_blank">{imageAutor}</a></p>
            </header>
            <section className="post__body">
                <div className="post__metadata">
                    <p><Link href={autorURL}>{autor}</Link></p>
                    <p>{date}</p>
                    <p>{category}</p>
                </div>
                <div className="post__content">
                    <MDXRemote {...source} />
                    <strong>Si estas atravesando por alguna situación relacionada con este u otros temas y consideras que necesitas asistencia psicológica escríbeme. El cuidado de la salud mental es muy importante.</strong>
                    <CallToAction link="https://api.whatsapp.com/message/LBT3GA3KFI23E1" text="Contactar" external={true}/>
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
                    min-height: 15rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: url(${imageURL}) center/cover no-repeat fixed;
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
                    padding: 2rem 0;
                }
                .post__title-image-info{
                    position: absolute;
                    right: 0;
                    bottom: -50px;
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
                `}
            </style>
        </article>
    )
}

export async function getStaticProps ({ params }){
    const { source, frontmatter } = await getFileBySlug(params.slug)
    return {
        props: { source, frontmatter }
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    })
    )
    return {
        paths,
        fallback: false
    }
}