import React, { useContext } from 'react'
import { ProductCT } from '../../context/product.context'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {}

const Sellers = (props: Props) => {
    const { products } = useContext(ProductCT)
    //sort product by price in assending order and take the first 4
    const sortedProducts = [...products].sort((a,b) => a.price - b.price).slice(0,4)

    return (
        <div>
            <h1 className='mx-auto w-full px-12 py-6 text-[30px] text-[#505F4E] font-Baloo font-medium'>Best Sellers</h1>
            <div className="w-full h-[0px] border border-gray-200"></div>
            <div className='bg-white w-full overflow-x-auto'>
                <div className='flex space-x-4 pl-4 p-4 ' style={{ width: 'calc(100% - 8px)', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {sortedProducts.map((product: IProduct) => (
                        <div key={product.id} className="group bg-white p-4 max-w-xs mx-auto border border-gray-100 rounded-lg shadow-md" style={{ display: 'inline-block', minWidth: '350px' }}> {/* border border-gray-100 rounded-lg shadow-md*/}
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
                                <Link to={`product-single/${product.id}`} className="text-lg font-semibold text-stone-600 group-hover:underline">{product.name}</Link>
                                <div className="flex justify-between mt-3">
                                    <div className="text-neutral-500 text-xs font-semibold font-open-sans capitalize group-hover:underline ">{product.category}</div>
                                    <div className="text-stone-600 text-xs font-semibold font-open-sans capitalize group-hover:underline">${product.price}.00</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sellers
