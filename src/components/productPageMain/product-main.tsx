import React, { useContext, useState, useEffect } from 'react';
import ProductItem from '../product-item/product-item';
import Contact from '../contact/contact';
import { ProductCT } from '../../context/product.context';
import { IProduct } from '../../interface/product';
import { CategoryCT } from '../../context/category.context';
import { ICategory } from '../../interface/category';
import { useLocation } from 'react-router-dom';

const ProductPageMain = () => {
  const { products } = useContext(ProductCT);
  const { categories } = useContext(CategoryCT);
  const location = useLocation();

  // State để lưu trữ danh mục được chọn (theo name)
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);

  useEffect(() => {
    // Lấy id từ URL và tìm name tương ứng từ danh mục
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('category');

    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      setSelectedCategoryName(category ? category.name : null);
    } else {
      setSelectedCategoryName(null);
    }
  }, [location.search, categories]);

  // Hàm để xử lý khi checkbox thay đổi và cập nhật URL
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    const newCategoryName = selectedCategoryName === category?.name ? null : category?.name;

    setSelectedCategoryName(newCategoryName);

    // Cập nhật URL
    const url = new URL(window.location.href);
    url.searchParams.set('category', newCategoryName ? categoryId : '');
    window.history.pushState({}, '', url.toString());
  };

  // Lọc sản phẩm dựa trên danh mục được chọn
  const filteredProducts = selectedCategoryName === null 
    ? products 
    : products.filter((product: IProduct) => product.category === selectedCategoryName);

  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <div className="flex space-x-24 items-center ml-6 mb-6">
          <div className="flex space-x-4 items-center">
            <label htmlFor="sort" className="text-gray-700">Sort By:</label>
            <select id="sort" className="border border-gray-300 rounded-md p-2">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="flex space-x-4 items-center">
            <label htmlFor="show" className="text-gray-700">Show:</label>
            <select id="show" className="border border-gray-300 rounded-md p-2">
              <option>Default</option>
              <option>50 per page</option>
              <option>100 per page</option>
            </select>
          </div>
        </div>
        
        <div className="flex">
          <div className="grid grid-cols-3 gap-6 flex-grow">
            {filteredProducts.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <div className="ml-6 w-1/4">
            <h2 className="text-[#505F4E] font-Baloo font-medium text-[36px] mb-2">Kategorien</h2>
            <div className="bg-white p-4 rounded-md shadow-md mb-6">
              <ul className="space-y-2">
                {categories.map((category: ICategory) => (
                  <li key={category.id}>
                    <label>
                      <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={selectedCategoryName === category.name}
                        onChange={() => handleCategoryChange(category?.id)}
                      />
                      {category.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
              <img src="/public/anniesprattncq2sguvlgounsplash-1@2x.png" alt="Plants" className="w-full h-auto object-cover"/>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black bg-opacity-25">
                <h2 className="absolute top-12 text-white text-2xl font-bold leading-tight mb-2">Grow your own<br/>favourite plant</h2>
                <button className="absolute bottom-12 mt-4 px-4 py-2 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
                  Shop Now <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-gray-700 text-lg mb-2">Filter By Price</h4>
              <div className="space-y-4">
                <p>From $0 to $500</p>
                <input type="range" className="w-full" min="0" max="500" />
              </div>
              <div className="mt-6">
                <h4 className="text-gray-700 text-lg mb-2">Filter By Size</h4>
                <div className="space-y-4">
                  <p>2 mm by 50</p>
                  <input type="range" className="w-full" min="0" max="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ProductPageMain;
