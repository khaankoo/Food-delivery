'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Stack } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'

const page = () => {
    const [ datas, setDatas ] = useState("")
    const foodNew = async () => {
      try {
        const res = await axios.get("http://localhost:8000/foods/getfood")
        setDatas(res.data)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      foodNew()
    }, [])
  return (
    <Stack>
        <Navbar />
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 1280, marginX: 'auto', marginY: 5 }}>
          <Button sx={{ border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Breakfast</Button>
          <Button sx={{ border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Food</Button>
          <Button sx={{ border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Main Course</Button>
          <Button sx={{ border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Dessert</Button>
        </Stack>
        <Footer />
    </Stack>
  )
}

export default page