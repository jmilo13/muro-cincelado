import React from 'react'
import Link from 'next/link'

export default function Service (props) {
    const { link, text, external} = props
        return (
            <React.Fragment>
                {external ?
                <a href={link} className="button-link" target="_blank" rel='noreferrer noopener'>{text}</a>
                :
                    <Link href={link}>
                        <a className="button-link">{text}</a>
                    </Link>
                }
                <style jsx>
                    {`
                    .button-link {
                        display: block;
                        width: max-content;
                        padding: 0.7rem 2rem;
                        background: var(--primary-color);
                        text-decoration: none;
                        color: var(--letter-on-dark);
                        border-radius: 0.8rem;
                        font-size: 1.2rem;
                        transition: all 1s;
                      }
                      .button-link:hover {
                        color: var(--letter-on-dark);
                        transform: scale(1.1);
                      }
                    `}
                </style>
            </React.Fragment>          
        )
}
