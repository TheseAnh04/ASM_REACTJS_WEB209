
import { useContext, useEffect, useState } from 'react';
import Contact from '../contact/contact'
import { useLocation, useParams } from 'react-router-dom';
import { IProduct } from '../../interface/product';
import { GetById } from '../../services/product.service';
import { ProductCT } from '../../context/product.context';

type Props = {}

const ProductSingle = (props: Props) => {
  const location = useLocation();
  const { keywords } = location.state || {};
  const [products, setProduct] = useState<IProduct[]>([]);
  const { id } = useParams();
  // console.log(id);
  

    useEffect(() => {
        (async () => {
          const data = await GetById(id as string|number);
          setProduct(data);
        })()
    }, [id]);


  return (
    <>
      <div>
        <div className="w-full mx-auto p-8 flex">
            
              <div className="mx-auto">
              <img src={products.image} alt="Main Product Image" className="w-[335px] h-[335px]"/>
              <div className="flex space-x-12 mt-4 mx-auto">
                  <img src={products.image} alt="Thumbnail 1" className="w-16 h-14 border-2 object-contain border-gray-300"/>
                  <img src={products.image} alt="Thumbnail 2" className="w-16 h-14 ml-2 object-contain"/>
                  <img src={products.image} alt="Thumbnail 3" className="w-16 h-14 ml-2 object-contain"/>
              </div>
          </div>

            <div className="w-1/2 mx-auto ">
                <h2 className="absolute text-sm text-gray-600 uppercase">Plant</h2>
                <h1 className="text-3xl font-bold mt-12">{products.name}</h1>
                <p className="text-gray-600 mt-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...
                </p>
                <div className="flex items-center mt-4">
                    <span className="text-2xl font-bold">${products.price}</span>
                    <span className="text-gray-400 line-through ml-4">$250.00</span>
                    <span className="text-green-500 ml-2">50% OFF</span>
                </div>
                <div className="flex items-center mt-12">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button className="px-3 py-1 text-gray-700">-</button>
                    <input type="text" id="quantity" className="w-12 text-center border-l border-r border-gray-300" value="1"/>
                    <button className="px-3 py-1 text-gray-700" >+</button>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to cart</button>
                </div>
            </div>
        </div>
        {/* end */}
        <div className="w-[1400px] p-6 mx-auto">
            <h2 className="text-[20px] font-semibold text-green-600 underline-gradient">Description</h2>
              <p className="[margin-block-start:0] [margin-block-end:9px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
              <p className="[margin-block-start:0] [margin-block-end:9px]">
                industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of
              </p>
              <p className="m-0">type and scrambled i</p>
        </div>
        {/* end */}
        <div className="w-[1400px] p-6 mx-auto">
            <h2 className="text-[20px] font-semibold text-green-600 underline-gradient">About</h2>
              <p className="[margin-block-start:0] [margin-block-end:9px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled i  
              </p>
              <p className="[margin-block-start:0] [margin-block-end:9px]">
                industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of
              </p>
              <p className="m-0">type and scrambled i</p>
        </div>
        {/* end */}
        <div className=" flex justify-between p-16 w-full mx-auto">
            <div className="flex justify-center space-x-6">
                <img src="/public/ffef-2@2x.png" alt="Product Image" className="w-[183px] h-[183px"/>
                <div className=" mt-8">
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <span className="text-gray-700 text-xl">★★★★★</span>
                    </div>
                    <div className="text-green-500 text-2xl font-bold">5.0</div>
                    <div className="text-gray-500">(388)</div>
                </div>
            </div>
            </div>
            <div className="mt-6">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Write reviews</button>
            </div>
        </div>
        <div className="p-16 mx-auto">
            <div>
              <div className="flex items-center">
                <div className="text-gray-600">5 ★</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width:'100%'}} ></div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-gray-600">4 ★</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width:'10%'}}></div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-gray-600">3 ★</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width:'0%'}}></div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-gray-600">2 ★</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full"style={{width:'0%'}} ></div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-gray-600">1 ★</div>
                <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width:'0%'}}></div>
                </div>
              </div>
            </div>
        </div>
        {/* end */}
        <div className="container p-16 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 ">
                    <div className="flex items-center mb-2">
                        <h3 className="text-green-600 text-lg font-semibold">Aman gupta</h3>
                        <span className="ml-2 text-black">★★★★★</span>
                    </div>
                    <p className="text-gray-700">I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
                </div>
                <div className="p-4 ">
                    <div className="flex items-center mb-2">
                        <h3 className="text-green-600 text-lg font-semibold">Aman gupta</h3>
                        <span className="ml-2 text-black">★★★★★</span>
                    </div>
                    <p className="text-gray-700">I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
                </div>
                <div className="p-4 ">
                    <div className="flex items-center mb-2">
                        <h3 className="text-green-600 text-lg font-semibold">Aman gupta</h3>
                        <span className="ml-2 text-black">★★★★★</span>
                    </div>
                    <p className="text-gray-700">I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded">See all</button>
            </div>
        </div>
      </div>
      <Contact/>
    </>
  )
}

export default ProductSingle