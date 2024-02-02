import Food from '@/image/Food'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Stack sx={{ width: 'screen', height: "900px", bgcolor: '#18BA51' }}>
        <Stack sx={{ display: 'flex', width: '1280px', margin: 'auto', color: 'white', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Stack sx={{ width: "380px" }}>
                <Typography sx={{ fontSize: "55px", textShadow: 3, fontWeight: 'bold', borderBottom: "1px solid white", paddingBottom: 2 }}>Pinecone Food Delivery</Typography>
                <Typography sx={{ fontSize: '25px', paddingTop: 2 }}>We love food</Typography>
            </Stack>
            <Stack>
                <Food />
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Header