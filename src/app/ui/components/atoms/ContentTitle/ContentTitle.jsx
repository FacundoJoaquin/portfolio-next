import React from 'react'

const ContentTitle = ({children, classname}) => {
  return (
    <h2 className={`text-xl font-bold md:text-2xl 2xl:text-3xl dark:text-black text-darkSurface-400 ${classname}`}>{children}</h2>
  )
}

export default ContentTitle