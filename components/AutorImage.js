import React from 'react'

export default function AutorImage(props){
    const { src, alt } = props
    return (
        <React.Fragment>
            <img className="autor__image" src={src} alt={alt}/>
            <style jsx>
                {`
                .autor__image {
                    width: 16rem;
                    height: 16rem;
                    border-radius: 50%;
                    object-fit: cover;
                    transform: rotate(-22deg);
                }
                `}
            </style>
        </React.Fragment>
    )
}