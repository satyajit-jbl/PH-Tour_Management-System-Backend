/* eslint-disable no-console */
import app from "./app";
import {Server} from "http";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";
// import { promise } from "zod";

let server : Server;

const startServer = async () =>{
    try {
        
        await mongoose.connect(envVars.DB_URL);

server = app.listen(envVars.PORT, ()=>{
    console.log(`Server is listening to port ${envVars.PORT}`);
})
    } catch (error) {
        console.log(error);
    }
}

startServer()

process.on("unhandledRejection", (err)=>{
    console.log("Unhandled rejection detected ... server shutting down...",err);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
        process.exit(1)
    }
})

process.on("uncaughtException", (err)=>{
    console.log("Uncaught exception detected ... server shutting down...",err);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
        process.exit(1)
    }
})

process.on("SIGTERM", ()=>{
    console.log("SIGterm Signal received ... server shutting down...");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
        process.exit(1)
    }
})
// let myAge;

process.on("SIGINT", ()=>{
    console.log("SIGINT Signal received ... server shutting down...");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
        process.exit(1)
    }
})
// unhandled rejection errror
// Promise.reject(new Error ("i forgot to catch this promise"))

// uncaught rejection error
// throw new Error("I forgot to handle this local error")

/**
 * unhandled rejection errror
 * uncaught rejection error
 * signal termination /sigterm
 */