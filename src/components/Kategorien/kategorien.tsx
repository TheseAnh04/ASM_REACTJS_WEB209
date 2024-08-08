import React, { useContext } from 'react'
import { CategoryCT } from '../../context/category.context'
import { ICategory } from '../../interface/category'

type Props = {}

const Kategorien = (props: Props) => {
    const {categories} = useContext(CategoryCT)
    // console.log(categories);
    
  return (
    <div>
        <h1 className='mx-auto w-full px-12 py-4 text-[30px] text-[#505F4E] font-Baloo font-medium'>Kategorien</h1>
        {/* end span */}
        <div className="w-full h-[0px] border border-gray-200"></div>
        {/* end hr */}
        <div className='w-full mx-auto p-12'>
            <div className='grid grid-cols-4 gap-1'>
                {categories.map((category:ICategory)=>(
                     <div key={category.id} className=" group relative w-[303px] h-[374px] mx-auto ">
                        <img className=" object-contain" src={category.image} alt="Beleuchtung" />
                        <div className="group-hover:underline absolute top-4 right-4 text-white shadow-lg text-sm font-semibold p-1">
                            {category.name}<br/>30 items
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Kategorien