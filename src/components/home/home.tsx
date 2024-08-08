import React from 'react'
import Sellers from '../best-seller/best-sellers'
import PostImage from '../post-image/post-image'
import Kategorien from '../Kategorien/kategorien'
import Contact from '../contact/contact'
import Slider from '../slider/slider'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[#F8F4F0] w-full'>
        <Slider/>
        <Sellers/>
        <PostImage/>
        <Kategorien/>
        <Contact/>
    </div>
  )
}

export default Home