import React, { useContext } from 'react'
import { ProductCT } from '../../context/product.context'
import { useForm } from 'react-hook-form'
import { FormData } from '../../interface/product'
import { CategoryCT } from '../../context/category.context'
import { ICategory } from '../../interface/category'



const ProductAdd = () => {
  const {onAdd} = useContext(ProductCT)
  const {register, handleSubmit, formState:{errors}} = useForm<FormData>()
  const {categories} = useContext(CategoryCT)
  
  const onSubmit = (data:FormData) =>{
    onAdd(data)
  }
  return (
    <div className='min-h-[610px]'>
        <div className="mx-auto p-6 mt-10">
          <h1 className="text-2xl font-bold mb-10 text-center">Add Form</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-10">
            <div className='relative'>
              <input 
                type="text" 
                placeholder="name" 
                {...register('name',{required:true})} 
                className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {(errors.name) && <span className='text-red-600 text-s absolute top-full left-0 mt-1'>Name is required!</span>}
            </div>
            <div className='relative'>
              <input 
                type="text" 
                placeholder="image url" 
                {...register('image',{required:true})} 
                className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {(errors.image) && <span className='text-red-600 text-s absolute top-full left-0 mt-1'>Image is required!</span>}
            </div>
            <div className='relative'>
              <input 
                type="number" 
                placeholder="price" 
                {...register('price',{required:true,pattern:/^\d*$/})} 
                className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {(errors.price) && <span className='text-red-600 text-s absolute top-full left-0 mt-1'>Price must be numeric and greater than 0</span>}
            </div>
            <div className='relative'>
              <select {...register('category',{required:true})} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a category</option>
                {categories.map((category:ICategory , index:number) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
              </select>
              {(errors.category) && <span className='text-red-600 text-s absolute top-full left-0 mt-1'>Selecting a category is required</span>}
            </div>
            <button 
              type="submit" 
              className=" mt-auto max-w-xs w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </form>
        </div>

    </div>


  )
}

export default ProductAdd