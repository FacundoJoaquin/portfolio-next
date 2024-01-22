import React from 'react';
import Cross from '../../icons/Cross';
import { useAppContext } from '../../../../context';

const Modal = ({ children, close }) => {
  const {ui, setUi} = useAppContext()
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-[100]">
      <div className="mx-auto rounded text-white border bg-[#141414] border-darkSurface-400 relative p-10 transition ease-in-out duration-300 w-2/3">
        <button name='close-modal' className='absolute top-2 right-4' onClick={close}>
          <Cross style={'h-6 w-6 text-gray-400 text-darkSurface-300'} />
        </button>
        <p className='text-darkSurface-100'>{children}</p>
      </div>
    </div>
  );
};

export default Modal;
