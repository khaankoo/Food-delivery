'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Stack, Box, Divider } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const page = () => {
  const [open, setOpen] = React.useState(false);
  const [ datas, setDatas ] = useState("");
  const handleOpen = () => {
    setOpen(!open)
  }
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
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 1280, marginX: 'auto', lineHeight: 1 }}>
          <Stack sx={{ display: 'flex', flexDirection: 'column', marginY: 5, gap: 3 }}>
            <Button sx={{ justifyContent: 'space-between', border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Breakfast  <MoreVertIcon /></Button>
            <Button sx={{ justifyContent: 'space-between', border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Food  <MoreVertIcon /></Button>
            <Button sx={{ justifyContent: 'space-between', border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Main Course  <MoreVertIcon /></Button>
            <Button sx={{ justifyContent: 'space-between', border: 1, width: 280, padding: 1, color: 'black', backgroundColor: '#18BA51' }}>Dessert  <MoreVertIcon /></Button>
          </Stack>
          <Button onClick={handleOpen} sx={{ height: 20, marginY: 5, backgroundColor: '#18BA51' }}>Open modal</Button>
        </Stack>
        <div>
          <Modal
            open={open}
            onClose={() => {setOpen(!open)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 40, fontSize: 26 }}>
                Create food
              </Typography>
              <Divider />
              <Typography id="modal-modal-description" sx={{ my: 2 }}>Хоолны нэр</Typography>
              <TextField id="outlined-basic" label="Хоолны нэр" variant="outlined" sx={{ width: 330 }}/>
              <Typography id="modal-modal-description" sx={{ my: 2 }}>Хоолны ангилал</Typography>
            </Box>
          </Modal>
        </div>
        <Footer />
    </Stack>
  )
}

export default page