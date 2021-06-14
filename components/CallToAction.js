import React from 'react'
import Link from 'next/link'

export default function Service (props) {
    const { link, text, external} = props
    if(external){
        return (
            <React.Fragment>
                <a href={link} className="button-link" target="_blank" rel='noreferrer noopener'>{text}</a>
                <style jsx>
                    {`
                    .button-link {
                        display: block;
                        width: max-content;
                        padding: 1rem 2rem;
                        margin: 2rem auto;
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
    else{  return (
            <React.Fragment>
                <Link href={link}>
                    <a className="button-link">{text}</a>
                </Link>
                <style jsx>
                    {`
                    .button-link {
                        display: block;
                        width: max-content;
                        padding: 1rem 2rem;
                        margin: 2rem auto;
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
}
