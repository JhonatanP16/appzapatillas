import React from 'react'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cartSlice';

const CartItem = ({ id, title, text, img, color, shadow, price, cartQuantity }) => {
    const dispatch = useDispatch();
    const onDecreaseItem = () =>{
        dispatch(cartActions.setDecreaseCartItems(id))
    }
    const onRemoveItem = () =>{
        dispatch(cartActions.setRemoveItemFromToCart(id))
    }
    const onIncreaseItem = () =>{
        dispatch(cartActions.setIncreaseCartItems(id))
    }
  return (
    <>
    <div className='flex items-center justify-between w-full px-5 '>
        <div className='flex items-center gap-5'>
          <div className={` bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105
           transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className='w-36 h-auto object-fill lg:w-28' />
          </div>
          <div className='grid items-center gap-4'>
                <div className='grid items-center leading-none'>
                <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
                <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
                </div>
                <div className='flex items-center justify-around w-full'>
                    <button type='button'
                    onClick={onDecreaseItem}
                    className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                        <FaMinus className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' />  </button>
                    <div className='bg-theme-cart rounded text-white font-medium lg:text-xs 
                    w-7 h-6 flex items-center justify-center'>{cartQuantity}</div>
                    <button type='button'
                    onClick={onIncreaseItem}
                    className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                        <FaPlus className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' /></button>
                </div>
           </div>
        </div>
        <div className='grid items-center gap-5'>
            <div className='grid items-center justify-center'>
                <h1 className='grid items-center justify-center'>
                    ${Number(price) * cartQuantity}
                </h1>
            </div>
            <div className='grid items-center justify-center'>
            <button type='button' className='bg-theme-cart rounded p-2 lg:p-0.5 grid items-center
            justify-items-center'
            onClick={onRemoveItem}>
              <FaTrashAlt className='w-4 h-4 text-white' />
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default CartItem
