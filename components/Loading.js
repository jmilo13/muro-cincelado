import React from 'react'

const Loading = () => {

return (
    <React.Fragment>
        <section className="loading">
            <div className="lds-ripple"><div></div><div></div></div>
            <style jsx>
                {`
                .loading{
                width: 100vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                }
                .lds-ripple {
                display: inline-block;
                position: relative;
                width: 6rem;
                height: 6rem;
                }
                .lds-ripple div {
                position: absolute;
                border: 4px solid var(--primary-color);
                opacity: 1;
                border-radius: 50%;
                animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                }
                .lds-ripple div:nth-child(2) {
                animation-delay: -0.5s;
                }
                @keyframes lds-ripple {
                0% {
                    top: 3rem;
                    left: 3rem;
                    width: 0;
                    height: 0;
                    opacity: 1;
                }
                100% {
                    top: 0px;
                    left: 0px;
                    width: 6rem;
                    height: 6rem;
                    opacity: 0;
                }
                }
                `}
            </style>
        </section>
    </React.Fragment>
)}


export default Loading