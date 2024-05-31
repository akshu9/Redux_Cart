import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/card_slice'

export default function CartTile({cartItem}) {
  const Dispatch=useDispatch()
    function handleRemove(){
        Dispatch(removeFromCart(cartItem.id))

    }
  return (
  <>
  <div className="flex flex-col md:flex-row items-center justify-between bg-red-500 mt-2 mb-2 p-3 rounded-xl">
      <div className="flex items-center">
        <img
          src={cartItem?.image}
          className="h-28 w-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-4 md:ml-10 self-start space-y-2 md:space-y-5">
          <h1 className="text-lg md:text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-base md:text-lg text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <button
          onClick={handleRemove}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-3 w-full md:w-auto"
        >
          Remove From Cart
        </button>
      </div>
    </div>
    </>
  );
};