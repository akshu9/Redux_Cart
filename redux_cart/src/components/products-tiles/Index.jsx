import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/slices/card_slice'


export default function ProductTile({product}) {
const Dispatch=useDispatch()
const{cart}=useSelector(state=>state)

   function handleRemove(){
    Dispatch(removeFromCart(product.id))
    console.log('remove')
   }

    function handletocart(){
    Dispatch(addToCart(product))
    }
    

  return <div>
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 m-2 rounded-xl">
    <div className="h-[180px]">
        <img
        src={product?.image}
        alt={product?.title}
        className='object-cover h-full w-full'/>
    </div>
    <div>
        <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{product?.title}</h1>
    </div>
    <div className="flex items-center justify-center w-full mt-5">
        <button onClick={cart.some(items=>items.id===product.id)?handleRemove:handletocart} className='bg bg-red-900 text-white border-2 rounded-lg font-bold p-3'>
        {
        cart.some(items=>items.id===product.id)?'Remove items ':'Add to cart'
        }
        </button>
        
    </div>
    </div>
    </div>
  
}

