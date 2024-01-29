import express from "express";
import cors from "cors"
import { connectDataBase } from "./utils/database";

const PORT = 8000;

const start = () => {
    const app = express();
    app.use(cors());
    connectDataBase();

    
    app.listen(PORT, () => {
        console.log('Server is running');
    })
}

start()