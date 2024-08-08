import React, { useContext } from 'react'
import { ProductCT } from '../../context/product.context'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'


const ProductList = () => {
  const {products, onDelete} = useContext(ProductCT)
  return (
    <>
      <div className='min-h-auto'>
        <h1 className="text-3xl font-bold ">List Product</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product:IProduct, i:number) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{i + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img src={product.image} width={90} alt={product.name} />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{product.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.price}</td>
                <td className="py-2 px-4 border-b border-gray-200">{product.category}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link to={`edit/${product.id}`} className="mr-2 px-4 py-1 text-sm text-white bg-blue-500 rounded">Edit</Link>
                  <button onClick={() => onDelete(product.id)} className="px-4 py-1 text-sm text-white bg-red-500 rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList