import React, { useContext } from 'react'
import { CategoryCT } from '../../context/category.context'
import { FormCateData } from '../../interface/category'
import { useForm } from 'react-hook-form'

type Props = {}

const AddCategory = (props: Props) => {
  const {onAddCate} = useContext(CategoryCT)
  const {register, handleSubmit, formState:{errors}} = useForm<FormCateData>()
  const onSubmit = (data:FormCateData) =>{
    onAddCate(data)
  }

  return (
    <div className='min-h-[610px]'>
        <div className="mx-auto p-6 mt-10">
          <h1 className="text-2xl font-bold mb-10 text-center">Add Category Form</h1>
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

export default AddCategory