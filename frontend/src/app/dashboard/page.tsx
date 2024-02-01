"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sales from '@/utils/Sales'
import InfoCard from '@/utils/infoCard'
import { Stack } from '@mui/material'
import React from 'react'

const Page = () => {
  return (
    <Stack>
      <Navbar />
      <InfoCard />
      <Sales />
      <Footer />
    </Stack>
  )
}

export default Page