import React, { useContext } from 'react'
import { CategoryCT } from '../../context/category.context'
import { ICategory } from '../../interface/category'
import { Link } from 'react-router-dom'

type Props = {}

const ListCate = (props: Props) => {
    const {categories, onDeleteCate} = useContext(CategoryCT)
  return (
    <>
      <div className='min-h-auto'>
        <h1 className="text-3xl font-bold ">List Category</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category:ICategory, i:number) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{i + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img src={category.image} width={90} alt={category.image} />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{category.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link to={`edit-category/${category.id}`} className="mr-2 px-4 py-1 text-sm text-white bg-blue-500 rounded">Edit</Link>
                  <button onClick={() => onDeleteCate(category.id)} className="px-4 py-1 text-sm text-white bg-red-500 rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListCate