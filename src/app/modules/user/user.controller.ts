/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";


// const createUser = async (req: Request, res: Response, next: NextFunction)=>{
// try {
//     // throw new Error("Fake Error")
//     // throw new AppError(httpStatus.BAD_REQUEST, "Fake error from controler")
//     const user = await UserServices.createUser(req.body)
   
//     res.status(httpStatus.CREATED).json({
//         message: "User created Successfully",
//         user
//     })
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// } catch (err : any) {
//     console.log(err);
//     next(err)
//     // res.status(httpStatus.BAD_REQUEST).json({
//     //     message: `Something went wrong !! ${err.message} from user controller`
//     // })
// }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction)=>{
    const user = await UserServices.createUser(req.body)

    // res.status(httpStatus.CREATED).json({
    //     message: "User Created Successfully",
    //     user
    // })
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user,

    })
})

// const getAllUsers = async (req: Request, res: Response, next: NextFunction) =>{
//     try {
//         const users = await UserServices.getAllUsers();

//         return users
//     } catch (err: any) {
//         console.log(err);
//         next(err)
//     }
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction)=>{
const result = await UserServices.getAllUsers();

//   res.status(httpStatus.OK).json({
//     success: true,
//     message: "All Users Retrieved Successfully",
//     data: users
//   })
sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "All Users Retrived Successfully",
        data: result.data,
        meta: result.meta
        
    })
})

export const UserControlers = {
    createUser,
    getAllUsers
}

//route matching(3 step)=>controller =>service => modal=>db