import React from 'react'

export default function ImageCaption(props){
    const { src, alt, href, text } = props
    return (
        <React.Fragment>
            <img
            className="image-post"
            src={src}
            alt={alt}
            />
            <a
            className="image-caption"
            target="_blank"
            href={href}
            >
                {text}
            </a>
            <style jsx>
                {`
                .image-post{
                    display: block;
                    width: 100%;
                    max-width: 40rem;
                    margin: auto;
                }
                .image-caption{
                    display: block;
                    margin-top: 0.5rem;
                    text-align: center;
                    font-size: 0.8rem;
                }
                `}
            </style>
        </React.Fragment>
    )
}


