import Icon from "@/image/Icon";
import React from "react";
import Basket from "@/image/Basket";
import User from "@/image/User";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: '1px solid',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 3, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '250px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Хайх" inputProps={{ 'aria-label': 'search' }}/>
        </Search>
        <Button size="medium" sx={{ color: "black", gap: 2 }}><Basket /> Сагс</Button>
        <Button size="medium" sx={{ color: "black", gap: 2 }} onClick={onClick}><User /> Нэвтрэх</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar
