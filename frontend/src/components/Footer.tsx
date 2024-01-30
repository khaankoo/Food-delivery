import White from '@/image/White'
import React from 'react'

import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Face from '@/image/Face';
import Insta from '@/image/Insta';
import Twitter from '@/image/Twitter';


const Footer = () => {
  return (
    <Stack sx={{ background: "#18BA51", height: 450, width: "screen", padding: 9, flexDirection: "column", alignItems: "center", gap: 5 }}>
      <Box sx={{ flexDirection: "row", width: 200, display: "flex", gap: 2 }}>
        <White />
        <Box sx={{ color: 'white', fontSize: 21 }}>Food Delivery</Box>
      </Box>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Button size="medium" sx={{ color: "white" }}>НҮҮР</Button>
        <Button size="medium" sx={{ color: "white" }}>Холбоо барих</Button>
        <Button size="medium" sx={{ color: "white" }}>Хоолны цэс</Button>
        <Button size="medium" sx={{ color: "white" }}>Үйлчилгээний нөхцөл</Button>
        <Button size="medium" sx={{ color: "white" }}>Хүргэлтийн бүс</Button>
        <Button size="medium" sx={{ color: "white" }}>Нууцлалын бодлого</Button>
      </Box>
      <Box sx={{ flexDirection: "row", gap: 4, display: "flex" }}>
        <Face />
        <Insta />
        <Twitter />
      </Box>
      <Box sx={{ color: "white", textAlign: "center", paddingTop: 4, borderTop: 2, width: 1200 }}>
        <Box>© 2024 Pinecone Foods LLC </Box>
        <Box>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
      </Box>
    </Stack>
  )
}

export default Footer