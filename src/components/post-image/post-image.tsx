import React from 'react'

type Props = {}

const PostImage = (props: Props) => {
  return (
    <div>
        <div className="w-[1200px] mx-auto p-24">
            <div className="grid grid-cols-4 grid-rows-2 gap-1">
                <div className="relative col-span-2 row-span-2">
                    <img className="w-full h-[565px] object-cover" src="/public/adobestock-204287225-preview-1@2x.png" alt="garten spaten"/>
                    <div className="absolute w-full top-3 left-0 bg-black bg-opacity-30 text-white text-lg font-semibold p-2">garten spaten</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="w-full h-full object-cover" src="/public/gtgre-1@2x.png" alt="schlammkuchen"/>
                    <div className="absolute w-full top-3  left-0 bg-black bg-opacity-30 text-white text-lg font-semibold p-2">schlammkuchen</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="w-full h-full object-cover" src="/public/ffgdsa-1@2x.png" alt="klemmen"/>
                    <div className="absolute w-full top-3  left-0 bg-black bg-opacity-30 text-white text-lg font-semibold p-2">klemmen</div>
                </div>
                
                
                <div className="relative h-[277px]">
                    <img className="w-full h-full object-cover" src="/public/gggrrr-1@2x.png" alt="sand"/>
                    <div className="absolute w-full top-3  left-0 bg-black bg-opacity-30 text-white text-lg font-semibold p-2">sand</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="w-full h-full object-cover" src="/public/bfdsa-1@2x.png" alt="pflanzer"/>
                    <div className="absolute w-full top-3  left-0 bg-black bg-opacity-30 text-white text-lg font-semibold p-2">pflanzer</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostImage