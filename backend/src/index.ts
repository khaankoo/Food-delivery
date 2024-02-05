import express from "express";
import cors from "cors"
import { connectDataBase } from "./utils/database";
import { user } from "./routes/User";

connectDataBase();

const start = () => {
    const app = express();
    app.use(express.json())
    app.use(cors());
    const PORT = 8000;


    app.use("/users", user)

    app.get("/", (req, res) => {
        res.status(200).send({ succes: true, msg: "Hello world" });
    })
    
    app.listen(PORT, () => {
        console.log('Server is running');
    })
}

start()