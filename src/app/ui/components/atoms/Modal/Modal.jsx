import React from 'react'
import Cross from '../../icons/Cross'

const Modal = ({children, close}) => {
  return (
    <div className="bg-black bg-opacity-70 flex justify-center items-center fixed inset-0 z-[100] ">
      <div className="max-w-md mx-auto rounded text-white  border bg-[#141414] border-gray-500 relative p-10">
        <button className='absolute top-2 right-4' onClick={close}>
            <Cross style={'h-6 w-6 text-gray-400'}/>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal