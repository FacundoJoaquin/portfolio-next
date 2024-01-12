import React from 'react'

const SimplyContainer = ({ children, style }) => {
    return (
        <div className={`${style} overflow-hidden bg-[#1b1b1b]  rounded-[.5rem]`}>
            {children}
        </div>
    )
}

export default SimplyContainer