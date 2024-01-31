"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Stack, Typography } from "@mui/material";

const page = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar />
      <Stack sx={{ alignItems: "center", marginY: 10 }}>
        <Typography>Бүртгүүлэх</Typography>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <label htmlFor="">Нэр</label>
          <TextField id="outlined-basic" label="Нэрээ оруулна уу" variant="outlined" />
        </Box>
        <Box>
          <label htmlFor="">Имэйл</label>
          <TextField id="outlined-basic" label="И-мэйл хаягаа оруулна уу" variant="outlined" />
        </Box>
        <Box>
          <label htmlFor="">Нууц үг</label>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
            Нууц үгээ оруулна уу
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Нууц үг"
            />
          </FormControl>
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default page;