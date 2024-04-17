import React, { useContext } from 'react';
import { Link } from  'react-router-dom';
import {BsPlus ,BsEyeFill} from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';

function Product({product}) {
  const {id,title,category,image,price}=product;
const {addToCart}=useContext(CartContext);
  console.log(product);
  
  return (
    <div className>
   <div className='  border border-[#e4e4e4] h-[220px] mb-4 relative overflow-hidden group transition'>
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img className='max-h-[150px] group-hover:scale-110 transition duration-300' src={image} alt=""/>
      </div>
    </div>
  <div className=' absolute top-0 right-7 group-hover:right-2  flex flex-col p-2 items-center justify-center
  gap-y-2 opacity-0 group-hover:opacity-100  transition-all duration-300'>
    <button onClick={()=>addToCart(product,id)}>
      <div className='flex items-center justify-center w-7 h-7 text-white bg-red-500'>
        <BsPlus className='text-3xl hover:bg-green-500 hover:scale-110'/>
        </div>
    </button>
    <Link to={`/product/${id}`} className='w-7 h-7 text-primary bg-white flex justify-center items-center drop-shadow-xl'>
    <BsEyeFill className='hover:scale-110'/>
    </Link>
  </div>
   </div>
   <div className='mt-0'>
      <div className='text-sm capitalize text-gray-500'>{category}</div>
      <Link to={`/product/${id}`} className='block max-w-[200px]'>
      <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-bold '>$ {price}</div>
    </div>
    </div>
  )
}

export default Product
