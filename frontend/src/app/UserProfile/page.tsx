'use client'
import Footer from '@/components/Footer'
import NavbarUser from '@/components/NavbarUser'
import { Stack } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Stack>
        <NavbarUser />
        <Stack sx={{ display: 'flex', flexDirection: 'column' }}>

        </Stack>
        <Footer />
    </Stack>
  )
}

export default page