import React, {useEffect} from 'react' 

const iconTop = '/icons/icon-top.svg'

export default function TopUp () {

        const handleClick = () => {
            window.scroll(0, 0)
        }

    return (
        <React.Fragment>
            <button className="top-up" type="button" onClick={handleClick}>
                <span className="top-up-icon"></span>
            </button>
            <style jsx>
                {`
                .top-up{
                    width: 3rem;
                    height: 3rem;
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    border-radius: 10px;
                    border: none;
                    background: rgb(0 0 0 / 70%);
                    cursor: pointer;
                    opacity: 0.5;
                    transition: 0.2s;
                }
                .top-up:hover{
                    opacity:1;
                }
                .top-up-icon{
                    width: 2.5rem;
                    height: 2.5rem;
                    display: block;
                    margin: auto;
                    background: url('/icons/icon-top.svg') center/cover no-repeat;
                }
                `}
            </style>
        </React.Fragment>
    )
}