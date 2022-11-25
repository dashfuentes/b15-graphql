import express from "express";
import { connect }  from "./database"

const app = express();
connect();


app.listen( '3000', () => {
    console.log('running..')
})