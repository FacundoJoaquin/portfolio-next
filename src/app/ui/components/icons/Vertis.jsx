import React from 'react'

const Vertis = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <mask id="circle-mask">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <circle cx="50" cy="50" r="21" fill="black" />
                </mask>
            </defs>
            <path d="M20,30 L50,95 L80,30 Z" fill="black" mask="url(#circle-mask)" />
        </svg>
    )
}

export default Vertis