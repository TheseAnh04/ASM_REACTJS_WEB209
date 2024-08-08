import React, { createContext, useEffect, useState } from 'react'
import { FormCateData, ICategory } from '../interface/category'
import { AddCate, EditCate, GetAllCate, RemoveCate } from '../services/category.service'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

export const CategoryCT = createContext({} as any)
const CategoryContext = ({children}: Props) => {
  const [categories, setCategory] = useState<ICategory[]>([])
  const navigate = useNavigate()
  useEffect(()=>{
    (async() =>{
        const data = await GetAllCate()
        setCategory(data)
    })()
  },[])

  const onDeleteCate = async (id:number|string) => {
    if (confirm('Are you sure you want to delete?')) {
        try {
            const category = await RemoveCate(id)
            alert('Delete category successfully.')
            const newcategories = categories.filter(category => category.id !== id)
            setCategory(newcategories)
        } catch (error) {
            
        }
    }
  }

  const onAddCate = async (data:FormCateData) =>{
    try {
        const category = await AddCate(data)
        alert('Add category successfully.')
        setCategory([...categories, category])
        navigate('/dashboard/list-category')
    } catch (error) {
        
    }
  }

  const onEditCate = async (data:FormCateData, id:number|string) =>{
    try {
        const resdata = await EditCate(data,id)
        alert('Edit category successfully.')
        const newcategory = categories.map(category => (category.id==id)?resdata:category)
        setCategory(newcategory)
        navigate('/dashboard/list-category');
    } catch (error) {
        console.log(error);
        
    }
}

  return (
    <CategoryCT.Provider value={{categories,onAddCate,onDeleteCate,onEditCate}}>
      {children}
    </CategoryCT.Provider>
  )
}

export default CategoryContext