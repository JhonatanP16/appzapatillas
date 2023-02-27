import React from 'react'
import emptybag from '../../assets/emptybag.png'
import { FaArrowLeft } from 'react-icons/fa'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
            <img src={emptybag} alt=""  className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300
            hover:scale-110' />
            <button
            type='button'
            className='button-theme bg-gradient-to-b from-amber-500
            to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center
            text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'
            onClick={onCartToggle}
            >
                <FaArrowLeft className='w-5 h-5 text-slate-900'/>
                <span className=''>Back to Store</span>
            </button>
        </div>
    </>
  )
}

export default CartEmpty
