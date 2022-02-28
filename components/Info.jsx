import React from 'react';

function Info({ id, children, title, text }) {
    return (
        <div className='info' id={id}>
            <div className='titleWrapper'>
                <h2 className='title'>{title}</h2>
                <p className='text'>{text}</p>
            </div>
            <style jsx>{`
                .info {
                    width: 100%;
                    height: fit-content;
                    padding-top: 75px;
                }

                .titleWrapper {
                    width: min(80vw, 320px);
                    margin-bottom: 60px;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: var(--color_light);
                }

                .title {
                    padding: 30px 0;
                    color: var(--color_dark);
                    font-size: min(11vw, 32px);
                    font-weight: 400;
                    text-align: center;
                    text-transform: uppercase;
                }
    
                .title::before {
                    content: '';
                    width: 16%;
                    height: 4px;
                    position: absolute;
                    top: 75px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: var(--color_dark);
                }
                
                .text {
                    display: ${text == null ? `none` : `block`};
                    padding: 0 16px 32px 12px;
                    color: var(--color_dark);
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    word-spacing: 1px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                @media screen and (max-width: 831px) {
                    .info {
                        padding-top: 16px;
                    }
                }
            `}</style>
            {children}
        </div>
    );
}

export default Info;
