import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js"

const app = express();





app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

const CONNECTION_URL="";
const PORT = process.env.PORT || 5000;

app.use('/posts', postRoutes);


mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(PORT,()=>app.listen(PORT,()=>console.log(`server is running at ${PORT}`)))
.catch((error=>console.log(error.messages)));


//mongoose.set('useFindAndMondify',false);