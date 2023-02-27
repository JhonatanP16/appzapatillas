import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { FaHeart,FaSearch, FaShoppingBag} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
const Navbar = () => {
    const [navState,setNavState] = useState(false);
    const dispatch = useDispatch();
    const quantityItems = useSelector(state => state.cart.cartTotalQuantity)
    const onCartToggle = () => {
        dispatch(cartActions.setOpenCart({
            cartState:true
        }))
    }
    const onNavScroll = () =>{
        if(window.scrollY > 30){
            setNavState(true)
        }else{
            setNavState(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onNavScroll);
        return () =>{
            window.removeEventListener('scroll',onNavScroll);
        }
    },[])

  return (
    <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' 
    :'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <img src={Logo} alt="" className={`w-16 h-auto ${navState && "filter brightness-0"}`}/>
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    <FaSearch className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
                </li>
                <li className='grid items-center'>
                    <FaHeart className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`} />
                </li>
                <li className='grid items-center'>
                    <button 
                    type='button'
                    onClick={onCartToggle}
                    className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                    <FaShoppingBag className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}/>
                    <div
                    className='absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight
                    font-medium rounded-full flex items-center justify-center
                    cursor-pointer hover:scale-110 transition-all duration-300'>
                        {quantityItems}
                    </div>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
