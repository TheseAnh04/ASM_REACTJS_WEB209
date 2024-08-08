import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import Client from './components/layout/client'
import ProductPage from './components/productPage/product'
import ProductSingle from './components/single-page/single-page'
import Admin from './components/layout/admin'
import ProductList from './components/product-list/product-list'
import ProductAdd from './components/product-add/product-add'
import ProductContext from './context/product.context'
import ProductEdit from './components/product-edit/product-edit'
import CategoryContext from './context/category.context'
import ListCate from './components/category-list/category-list'
import AddCategory from './components/category-add/category-add'
import EditCategory from './components/category-edit/category-edit'
import Search from './components/Search/search'
import Cart from './components/cart/cart'
import Login from './components/login/login'
import Register from './components/Register/register'
import PrivateRouter from './components/private-router/private-router'

function App() {
  const router = useRoutes([
    {path:'',element:<CategoryContext><ProductContext><Client/></ProductContext></CategoryContext>,children:[
      {path:'',element:<Home/>},
      {path:'search',element:<Search/>},
      {path:'/product-page',element:<ProductPage/>},
      {path:'/product-single/:id',element:<ProductSingle/>},
      {path:'/login',Component:Login},
      {path:'/register',Component:Register},
      // {path:'/cart',element:<Cart/>}
    ]},
    {path:'/dashboard',element:<CategoryContext><ProductContext><Admin/></ProductContext></CategoryContext>,children:[
      {path:'',element:<ProductList/>},
      {path:'add',element:<ProductAdd/>},
      {path:'edit/:id',element:<ProductEdit/>},
      {path:'list-category',element:<ListCate/>},
      {path:'add-category',element:<AddCategory/>},
      {path:'list-category/edit-category/:id',element:<EditCategory/>},
    ]}
  ])

  return router
}

export default App
