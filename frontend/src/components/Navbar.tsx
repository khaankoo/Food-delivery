import Icon from '@/image/Icon'
import React from 'react'
import TextField from '@mui/material/TextField';
import Basket from '@/image/Basket';
import User from '@/image/User';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 mx-auto max-w-screen-2xl'>
      <div className='flex gap-14'>
        <Icon />
        <button>НҮҮР</button>
        <button>ХООЛНЫ ЦЭС</button>
        <button>ХҮРГЭЛИЙН БҮС</button>
      </div>
      <div className='flex gap-14'>
        <input type="text" className='border p-1 w-64 rounded-md' placeholder='Хайх'/>
        <button className='flex gap-2'><Basket /> Сагс</button>
        <button className='flex gap-2'><User /> Нэвтрэх</button>
      </div>
    </div>
  )
}

export default Navbar