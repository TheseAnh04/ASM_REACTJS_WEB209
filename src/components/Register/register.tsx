import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {}
export interface IUser{
    id?:number|string,
    name?:string,
    email:string,
    password:string,
  }

const Register = (props: Props) => {
    const {register, handleSubmit,formState:{errors}} = useForm<IUser>()
    const navigate = useNavigate()
    const onSubmit = async (userdata:IUser)=>{
        try {
          const {data} = await axios.post(' http://localhost:3000/register',userdata)
          alert('Đăng kí thành công.')
          console.log(data);
          
          navigate('/login')
        } catch (error) {
          console.log(error);
          
        }
      }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Tên
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên của bạn"
              {...register('name',{required:true,minLength:6})}
            />
            {(errors.name) && <span className='text-red-600 text-[12px]'>Tên không để trống và lớn hơn 6 kí tự</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email của bạn"
              {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}
            />
            {(errors.email) && <span className='text-red-600 text-[12px]'>Không đúng định dạng email</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu của bạn"
              {...register('password',{required:true})}
            />
            {(errors.password) && <span className='text-red-600 text-[12px]'>Không được để trống</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đăng ký
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Đã có tài khoản?</p>
          <a href="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  )
}

export default Register