import { Stack, Box, Typography } from '@mui/material'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import React from 'react'
import Button from '@mui/material/Button';



const Sales = () => {
  return (
    <Stack sx={{ width: 1280, marginX: "auto", marginBottom: '80px' }}>
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: 1280, marginX: "auto" }}>
            <Box>
                <Typography sx={{ fontWeight: 'semibold', fontSize: '22px'}}>Хямдралтай</Typography>
            </Box>
            <Button variant="text" size='small' sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#18BA51' }}>
              <Typography>Бүгдийг харах</Typography>
              <KeyboardArrowRightOutlinedIcon />
            </Button>
        </Box>
        <Box></Box>
    </Stack>
  )
}

export default Sales