import React, { useContext } from 'react'
import { useParams} from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

function ProductDetails() {
  const { id }=useParams();
  const { products }=useContext(ProductContext);
  const {addToCart}=useContext(CartContext);

  const product= products.find((item)=>{
    return item.id===parseInt(id);
  })
  if(!product){
    return <section className='flex justify-center items-center 
    h-screen'>Loading...</section>
  }

  const {title,price,description,image}=product;
 
  return (
    <>
    <div className='mb-10'>
    <section className='pt-4 pb-4  lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'> 
      <div className='flex flex-col lg:flex-row items-center h-4'>
        <div className='flex flex-1 justify-center items-center mb-2 
        lg:mb-0 '>
          <img className='w-40 h-50 lg:max-w-sm mb-8' src={image} alt=''/>
        </div>
        <div className='flex-1 text-center lg:text-left'>
       <h1 className='text-[26px] font-medium mb-2 max-w-[450px]
       mx-auto lg:mx-0'>{title}</h1>
       <div className='text-red-400 font-medium text-xl mb-10'>
       $ {price}
       </div>
       <p className='mb-10 '>
        {description}
       </p>
       <button onClick={()=>addToCart(product, product.id)} className='bg-primary py-4 px-8 mb-8 text-white'>
        Add to Cart
       </button>
      </div>
      </div>
      </div>
   </section>
  </div>
  </>
  )
}

export default ProductDetails
