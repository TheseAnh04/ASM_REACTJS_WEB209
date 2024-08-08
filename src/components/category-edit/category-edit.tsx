import React, { useContext, useEffect } from 'react'
import { CategoryCT } from '../../context/category.context'
import { FormCateData } from '../../interface/category'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { GetCateById } from '../../services/category.service'

type Props = {}

const EditCategory = (props: Props) => {
    const {onEditCate} = useContext(CategoryCT)
    const {register, handleSubmit, reset, formState:{errors}} = useForm<FormCateData>()
    const param = useParams()
    useEffect(()=>{
        (async () =>{
            const product = await GetCateById(param?.id as string|number)
            if (product) {
                reset({
                    name: product.name,
                    image: product.image
                })
            }
        })()
    },[])
    const onSubmit = (data:FormCateData) =>{
        onEditCate(data, param?.id as string|number)
    }

  return (
    <div className='min-h-[610px]'>
        <div className="mx-auto p-6 mt-10">
          <h1 className="text-2xl font-bold mb-10 text-center">Add Edit Form</h1>
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
              Update
            </button>
          </form>
        </div>

    </div>
  )
}

export default EditCategory