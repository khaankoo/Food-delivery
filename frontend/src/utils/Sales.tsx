import { Stack, Box, Typography } from '@mui/material'
import React from 'react'



const Sales = () => {
  return (
    <Stack sx={{ width: 1280, marginX: "auto" }}>
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: 1280, marginX: "auto" }}>
            <Box>
                <Typography>Хямдралтай</Typography>
            </Box>
            <Box>
                <Typography>Бүгдийг харах</Typography>
            </Box>
        </Box>
        <Box></Box>
    </Stack>
  )
}

export default Sales