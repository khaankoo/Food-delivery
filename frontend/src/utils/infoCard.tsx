import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const data = [
    {
        url: "icon",
        h1: "Хүргэлтийн төлөв хянах",
        desc: "Захиалга бэлтгэлийг явцийг хянах"
    },
    {
        url: "icon",
        h1: "Шуурхай хүргэлт",
        desc: "Захиалга бэлтгэлийг явцийг хянах"
    },
    {
        url: "icon",
        h1: "Эрүүл баталгаат орц",
        desc: "Захиалга бэлтгэлийг явцийг хянах"
    },
    {
        url: "icon",
        h1: "Хоолны өргөн орц",
        desc: "Захиалга бэлтгэлийг явцийг хянах"
    }
]

const InfoCard = () => {
  return (
    <Stack sx={{ display: "flex", width: 1280, marginX: "auto", gap: 1, flexDirection: "row", justifyContent: "space-between", marginY: 15 }}>
        {
            data.map((el) => {
                return (
                    <Stack sx={{ padding: 2, border: "1px solid gray", width: "fit", borderRadius: 3, height: 135, flexDirection: "column", justifyContent: "space-between", boxShadow: 5 }}>
                        <Box sx={{ padding: 1}}>{el.url}</Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>{el.h1}</Typography>
                            <Typography sx={{ color: "gray", fontWeight: "light"}}>{el.desc}</Typography>
                        </Box>
                    </Stack>
                )
            })
        }
    </Stack>
  )
}

export default InfoCard