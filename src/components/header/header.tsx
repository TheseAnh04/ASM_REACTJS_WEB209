import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../../interface/product'
import { CartCT } from '../../context/cart.context'

type Props = {}

const Header = (props: Props) => {
    // const {cart} = useContext(CartCT)
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const onSubmit = (data:any) => {
        const {keywords} = data
        navigate(`/search?keywords=${keywords}`)
    }
  return (
    <header className='w-full bg-gradient-to-r from-lime-700 to-stone-600 shadow-lg'>
        <div className="container mx-auto flex items-center justify-between py-4 max-w-4xl px-4">
            <div className="relative w-full max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('keywords')} placeholder="Search..." className="w-full py-2 pl-4 pr-12 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
                    <button type='submit' className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m2.35-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
                    </svg>
                    </button>
                </form>
            </div>
            <div className="flex space-x-4 items-center">
                <div className="flex space-x-4">
                    <div className="text-white group flex items-center space-x-2 px-16">
                        <a href="#" className="group-hover:text-yellow-300">En</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                    <div className="relative text-white flex items-center space-x-2 group">
                        <svg className="w-[24px] h-[24px] group-hover:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="1" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>
                        <a href="#" className="hover:text-yellow-300">Account</a>
                        <ul className="absolute top-full  bg-white text-black shadow-lg rounded hidden group-hover:block">
                            <li className=" py-1 px-2 hover:bg-gray-200 cursor-pointer"><Link to='/register'>Đăng Kí</Link></li>
                            <li className=" py-2  hover:bg-gray-200 cursor-pointer"><Link to='/login'>Đăng Nhập</Link></li>
                        </ul>
                        </div>

                    <div className="text-white hover:text-yellow-300 flex items-center space-x-2">
                        <svg className="hover:text-yellow-300 w-[24px] h-[24px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                        <a href="#" className="hover:text-yellow-300">Cart(0)</a>
                    </div>
                </div>
            </div>
        </div>
        {/* End top header */}
        <div className="w-[1200px] h-[0px] border border-neutral-200 mx-auto"></div>
        {/* end hr */}
        <nav className='w-full py-4'>
            <ul className='mx-auto flex justify-center space-x-16 px-6 '>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <Link to="" className="text-white font-semibold group-hover:text-amber-300">Home Page</Link>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <Link to='/product-page' className="text-white font-semibold group-hover:text-amber-300">Products</Link>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <a href="#" className="text-white font-semibold group-hover:text-amber-300">About Us</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <a href="#" className="text-white font-semibold group-hover:text-amber-300">Contact</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <a href="#" className="text-white font-semibold group-hover:text-amber-300">FAQ</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <a href="#" className="text-white font-semibold group-hover:text-amber-300">Blog</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                <li className="flex">
                    <div className="group flex items-center space-x-1 bg-transparent hover:bg-gray-100 hover:bg-opacity-10 p-1 rounded transition duration-300">
                        <a href="#" className="text-white font-semibold group-hover:text-amber-300">Terms of Service</a>
                        <svg className="w-4 h-4 text-gray-800 dark:text-white group-hover:text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                        </svg>
                    </div>
                </li>
                {/* 
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Reviews</a></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header

function useContext(CartCT: any): { cart: any } {
    throw new Error('Function not implemented.')
}
