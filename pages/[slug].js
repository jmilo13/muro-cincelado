import { getFileBySlug, getFiles } from "lib/mdx"
import { MDXRemote } from "next-mdx-remote"

export default function Post({ content, source, frontmatter }) {
    return<section><MDXRemote {...source} /></section>
}

export async function getStaticProps ({ params }){
    const { content, source, frontmatter } = await getFileBySlug(params.slug)
    return {
        props: {content, source, frontmatter }
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