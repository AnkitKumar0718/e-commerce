import React from 'react'
import { createContext, useEffect, useState } from 'react'

 export const ProductContext=createContext();

function ProductProvider({children}) {
    const[products, setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            setProducts(data);
            
        }
        fetchProducts();
    },[])
  return (
      <ProductContext.Provider value={{products}}>
           {children}
      </ProductContext.Provider>
  )
}

export default ProductProvider;
