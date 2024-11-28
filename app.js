import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { test } from "./backend/controllers/mamadasControllers.js";

dotenv.config();

mongoose.connect(process.env.urlbase)

.then(()=>{
    console.log("Si jala esta mamada")
})

.catch((error)=>{
   console.log("No jala", error)
})

const app = express();
app.use(cors());
app.listen(4000,()=>[
    console.log("Se escucha mamalon")
])

test()