'use client'
import Footer from '@/components/Footer'
import NavbarUser from '@/components/NavbarUser'
import { Stack } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Stack>
        <NavbarUser />
        <Footer />
    </Stack>
  )
}

export default page