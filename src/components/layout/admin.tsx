import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const Admin = (props: Props) => {
  return (
    <div className="flex  min-h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center text-2xl font-bold">Admin Dashboard</div>
        <nav className="flex-grow ">
          <ul>
            <li>
              <Link to="/dashboard/" className="block py-2.5 px-4 hover:bg-gray-700">List Product</Link>
            </li>
            <li>
              <Link to="/dashboard/add" className="block py-2.5 px-4 hover:bg-gray-700">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/list-category" className="block py-2.5 px-4 hover:bg-gray-700">List Category</Link>
            </li>
            <li>
              <Link to="/dashboard/add-category" className="block py-2.5 px-4 hover:bg-gray-700">Add Category</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Admin