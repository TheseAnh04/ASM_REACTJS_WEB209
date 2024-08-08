import React, { createContext, useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { useNavigate } from 'react-router-dom'
import { Add, Edit, GetAlls, GetById, Remove } from '../services/product.service'
import { set } from 'react-hook-form'

type Props = {
    children: React.ReactNode
}

export const ProductCT = createContext({} as any)
const ProductContext = ({children}: Props) => {
    const [products, setProduct] = useState<IProduct[]>([])
    const navigate = useNavigate()
    useEffect(()=>{
        (async() =>{
            const data = await GetAlls()
            setProduct(data)
        })()
    },[])

    const onDelete = async (id:number|string) => {
        if (confirm('Are you sure you want to delete?')) {
            try {
                const product = await Remove(id)
                alert('Delete product successfully.')
                const newproducts = products.filter(product => product.id !== id)
                setProduct(newproducts)
            } catch (error) {
                
            }
        }
    }

    const onAdd = async (data:FormData) =>{
        try {
            const product = await Add(data)
            alert('Add product successfully.')
            setProduct([...products, product])
            navigate('/dashboard')
        } catch (error) {
            
        }
    }

    const onEdit = async (data:FormData, id:number|string) =>{
        try {
            const resdata = await Edit(data,id)
            alert('Edit product successfully.')
            const newproduct = products.map(product => (product.id==id)?resdata:product)
            setProduct(newproduct)
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            
        }
    }



  return (
    <ProductCT.Provider value={{products, onDelete, onAdd, onEdit}}>
        {children}
    </ProductCT.Provider>
  )
}

export default ProductContext