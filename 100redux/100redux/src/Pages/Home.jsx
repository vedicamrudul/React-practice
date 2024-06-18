import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux'
import { plusAmt, minusAmt } from '../slice/ProductSlice';
import { addToCart } from '../slice/CartSlice';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products)



   

    // console.log(products)
    return (

        <div>

            <div className='flex flex-wrap mx-24' >
      

                {products.map((product) =>

                    <div key={product.id} className='w-[22vw] h-[62vh] my-20 mx-10 bg-slate-500 rounded-lg outline-offset-8 outline flex flex-col outline-white shadow-lg shadow-black' >

                        <img className="m-4 mb-2 size-[19.5vw] rounded-lg" src={product.url} alt="not Found" />
                        <span className='bg-slate-500 text-white text-[1.3rem] flex items-center justify-around '>{product.name}   </span>

                        <span className='bg-slate-500 text-white text-[0.9rem] flex items-center justify-around '>{product.desc}   </span>
                        <span className='bg-slate-500  my-2 text-black text-[1.2rem] flex items-center justify-around '>Rs. {product.price}   </span>


                        <span className='bg-white m-5 my-1 h-10 border-black rounded-lg border-solid border-2 text-slate-900 text-[0.9rem] flex items-center justify-around '> <button onClick={() => dispatch(plusAmt({ id: product.id }))} className='text-[1.2rem] ml-3'>+</button> 
                        <span className='bg-white text-[1.1rem]'>{product.amt}</span>

                         <button onClick={() => dispatch(minusAmt({id: product.id}))}className='text-[1.6rem] 
                        mr-4'>-</button>


                            <span className='bg-black h-7 w-[0.9px]  '></span>
                            <button onClick={()=> dispatch(addToCart({id: product.id, name:product.name, url: product.url, desc: product.desc, price:product.price, quantity: product.amt}))} className='flex bg-white '>
                            Add to Cart <ShoppingCart className='bg-white pl-2' /></button></span>

                    </div>
                )}



            </div>
        </div>
    )
}

export default Home
