"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
let server;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://Critique_Master:36ZDXEltpsOKTMt5@cluster0.zh93j.mongodb.net/tour-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB !!!");
        server = app_1.default.listen(5000, () => {
            console.log("Server is listening to port 5000");
        });
    }
    catch (error) {
        console.log(error);
    }
});
startServer();
process.on("unhandledRejection", (err) => {
    console.log("Unhandled rejection detected ... server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
        process.exit(1);
    }
});
process.on("uncaughtException", (err) => {
    console.log("Uncaught exception detected ... server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
        process.exit(1);
    }
});
process.on("SIGTERM", () => {
    console.log("SIGterm Signal received ... server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
        process.exit(1);
    }
});
let myAge;
process.on("SIGINT", () => {
    console.log("SIGINT Signal received ... server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
        process.exit(1);
    }
});
// unhandled rejection errror
// Promise.reject(new Error ("i forgot to catch this promise"))
// uncaught rejection error
// throw new Error("I forgot to handle this local error")
/**
 * unhandled rejection errror
 * uncaught rejection error
 * signal termination /sigterm
 */ 
