import { useState } from 'react';
import { IProduct } from '../../interface/product';
import { Link } from 'react-router-dom';
import { CartCT } from '../../context/cart.context';

type Props = {
    product: IProduct
}

const ProductItem = ({product}:Props) => {
    // const {cart, setCart} = useContext(CartCT)

  return (
    <>
    <div className="mx-auto" >
        <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto w-[350px]">
            <div className="relative mb-4">
                <img src={product.image} alt={product.name} className="w-full h-[300px] object-contain rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                        <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                            <svg className="svg-icon w-6 h-6 text-gray-800 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path className='button-svg-path' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                            </svg>
                        </button>
                        <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                            <svg className="svg-icon w-6 h-6 text-gray-800 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path className='button-svg-path' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                            </svg>
                        </button>
                        <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                            <svg className="svg-icon w-6 h-6 text-gray-800 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path className='button-svg-path' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Link to={`/product-single/${product.id}`} className="text-lg font-semibold text-stone-600 group-hover:text-red-400">{product.name}</Link>
                <div className="flex space-x-6 mt-3">
                    <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">{product.price}</p>
                </div>
            </div>
        </div>
    </div>
    {/* end 1 */}
    {/* <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="relative mb-4">
        <img src="/public/fes-1@2x.png" alt="Square cultivation pots" className="w-full object-cover rounded-md" />
        <span className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-2 py-1">SELL</span>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div className="w-full">
        <h3 className="text-lg font-semibold text-stone-600 group-hover:text-red-400">Square cultivation pots</h3>
        <div className="flex space-x-6 mt-3">
            <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">$700.00</p> */}
            {/* <p className="text-sm text-neutral-500 line-through">$45.00</p> */}
        {/* </div> */}
        {/* </div> */}
    {/* </div> */}
    {/* end 2 */}
    {/* <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="relative mb-4">
        <img src="/public/fes-1@2x.png" alt="Square cultivation pots" className="w-full object-cover rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div className="w-full">
        <h3 className="text-lg font-semibold text-stone-600 group-hover:text-red-400">Square cultivation pots</h3>
        <div className="flex space-x-6 mt-3">
            <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">$38.00</p>
            <p className="text-sm text-neutral-500 line-through">$45.00</p> */}
        {/* </div> */}
        {/* </div> */}
    {/* </div> */}
    {/* end 3 */}
    {/* <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="relative mb-4">
        <img src="/public/fes-1@2x.png" alt="Square cultivation pots" className="w-full object-cover rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div className="w-full">
        <h3 className="text-lg font-semibold text-stone-600 group-hover:text-red-400">Square cultivation pots</h3>
        <div className="flex space-x-6 mt-3">
            <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">$2500.00</p>
            {/* <p className="text-sm text-neutral-500 line-through">$45.00</p> */}
        {/* </div> */}
        {/* // </div> */}
    {/* // </div> */}
    {/* end 4 */}
    {/* <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="relative mb-4">
        <img src="/public/fes-1@2x.png" alt="Square cultivation pots" className="w-full object-cover rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div className="w-full">
        <h3 className="text-lg font-semibold text-stone-600 group-hover:text-red-400">Square cultivation pots</h3>
        <div className="flex space-x-6 mt-3">
            <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">$2400.00</p>
            {/* <p className="text-sm text-neutral-500 line-through">$45.00</p> */}
        {/* </div> */}
        {/* </div> */}
    {/* </div> */} 
    
    {/* end 5 */}
    {/* <div className="group bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
        <div className="relative mb-4">
        <img src="/public/fes-1@2x.png" alt="Square cultivation pots" className="w-full object-cover rounded-md" />
        <span className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-2 py-1">SELL</span>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className='button-svg-path' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
            </button>
            <button className="hover:bg-lime-700 p-2 bg-white text-gray-900 rounded-full shadow-md">
                <svg className="svg-icon w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path  className='button-svg-path'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div className="w-full">
        <h3 className="text-lg font-semibold text-stone-600 group-hover:text-red-400">Square cultivation pots</h3>
        <div className="flex space-x-6 mt-3">
            <p className="group-hover:text-red-400 text-sm font-semibold text-stone-600">$38.00</p>
            <p className="text-sm text-neutral-500 line-through">$45.00</p>
        </div>
        </div>
    </div> */}
    </>
  );
};

export default ProductItem;
function useContext(CartCT: any): { cart: any; setCart: any; } {
    throw new Error('Function not implemented.');
}

