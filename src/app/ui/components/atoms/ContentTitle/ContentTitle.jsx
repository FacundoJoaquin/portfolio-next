import React from 'react'

const ContentTitle = ({children, classname}) => {
  return (
    <h2 className={`md:font-bold md:text-2xl 2xl:text-3xl ${classname}`}>{children}</h2>
  )
}

export default ContentTitle