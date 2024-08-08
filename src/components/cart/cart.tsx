import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="w-2/5 text-gray-600">Sản phẩm</div>
                <div className="w-1/5 text-center text-gray-600">Số lượng</div>
                <div className="w-1/5 text-center text-gray-600">Giá</div>
                <div className="w-1/5 text-center text-gray-600">Tổng cộng</div>
                <div className="w-1/5 text-center text-gray-600">Hành động</div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div className="flex items-center space-x-4 w-2/5">
                    <img src="https://via.placeholder.com/50" alt="Product" className="w-16 h-16 object-cover rounded"/>
                    <div>
                        <h4 className="text-lg font-semibold">Sản phẩm A</h4>
                        <p className="text-gray-500 text-sm">Mô tả ngắn gọn về sản phẩm</p>
                    </div>
                </div>
                <div className="w-1/5 text-center">
                    <input type="number" value="1" className="w-16 border border-gray-300 rounded p-2 text-center"/>
                </div>
                <div className="w-1/5 text-center">
                    <span className="text-lg font-semibold text-gray-700">$100</span>
                </div>
                <div className="w-1/5 text-center">
                    <span className="text-lg font-semibold text-gray-700">$100</span>
                </div>
                <div className="w-1/5 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Xóa</button>
                </div>
            </div>
            <div className="flex justify-between items-center border-b py-4">
                <div className="flex items-center space-x-4 w-2/5">
                    <img src="https://via.placeholder.com/50" alt="Product" className="w-16 h-16 object-cover rounded"/>
                    <div>
                        <h4 className="text-lg font-semibold">Sản phẩm B</h4>
                        <p className="text-gray-500 text-sm">Mô tả ngắn gọn về sản phẩm</p>
                    </div>
                </div>
                <div className="w-1/5 text-center">
                    <input type="number" value="2" className="w-16 border border-gray-300 rounded p-2 text-center"/>
                </div>
                <div className="w-1/5 text-center">
                    <span className="text-lg font-semibold text-gray-700">$200</span>
                </div>
                <div className="w-1/5 text-center">
                    <span className="text-lg font-semibold text-gray-700">$400</span>
                </div>
                <div className="w-1/5 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Xóa</button>
                </div>
            </div>
            <div className="flex justify-end border-t pt-4 mt-4">
                <div className="text-right">
                    <p className="text-lg font-semibold">Tổng cộng: <span className="text-gray-700">$500</span></p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Thanh toán</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cart