import Icon from "@/image/Icon";
import React from "react";
import Basket from "@/image/Basket";
import User from "@/image/User";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const Navbar = ({onClick}: any) => {
  return (
    <Stack sx={{ flexDirection: "row", width: 1280, justifyContent: "space-between", height: 30, alignItems: "center", paddingY: 4, margin: "auto"}}>
      <Stack direction={"row"} gap={4} alignItems={"center"}>
        <Icon />
        <Button size="medium" sx={{ color: "black", ":hover": "green" }}>НҮҮР</Button>
        <Button size="medium" sx={{ color: "black", ":hover": "green" }}>ХООЛНЫ ЦЭС</Button>
        <Button size="medium" sx={{ color: "black", ":hover": "green" }}>ХҮРГЭЛИЙН БҮС</Button>
      </Stack>
      <Stack direction={"row"} gap={4} alignItems={"center"}>
        <TextField id="outlined-basic" label="Хайх" variant="outlined" sx={{ width: 280, paddingY: 0, border: "black"}}/>
        <Button size="medium" sx={{ color: "black", gap: 2 }}><Basket /> Сагс</Button>
        <Button size="medium" sx={{ color: "black", gap: 2 }} onClick={onClick}><User /> Нэвтрэх</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar
