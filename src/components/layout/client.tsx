import React from 'react'
import Header from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'

type Props = {}

const Client = (props: Props) => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Client