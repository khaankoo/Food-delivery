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

const page = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-96 mx-auto gap-5 my-[91px]">
        <h1 className="text-2xl font-semibold">Бүртгүүлэх</h1>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Нэр</label>
          <TextField id="outlined-basic" label="Нэрээ оруулна уу" variant="outlined" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Имэйл</label>
          <TextField id="outlined-basic" label="И-мэйл хаягаа оруулна уу" variant="outlined" />
        </div>
        <div className="flex flex-col gap-2 w-full">
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
        </div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Үйлчилгээний нөхцөл зөвшөөрөх" />
        <button className="border bg-slate-100 text-gray-300 p-3 rounded-md w-full">Бүртгүүлэх</button>
      </div>
      <Footer />
    </div>
  );
};

export default page;
