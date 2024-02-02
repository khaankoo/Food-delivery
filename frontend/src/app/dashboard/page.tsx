"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginModal from '@/components/LoginModal'
import Navbar from '@/components/Navbar'
import Sales from '@/utils/Sales'
import InfoCard from '@/utils/infoCard'
import { Stack } from '@mui/material'
import React from 'react'

const Page = () => {
  const [ open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(!open)  
  }

  return (
    <Stack>
      <Navbar onClick={openModal}/>
      <Header />
      <InfoCard />
      <Sales />
      { open && ( <LoginModal /> )}
      <Footer />
    </Stack>
  )
}

export default Page