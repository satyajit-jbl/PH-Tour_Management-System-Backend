import { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER",
    ADMIN = "ADMIN",
    GUIDE = "GUIDE",
}

//***
// Auth providers
// email/password
// google authentications */

export interface IAuthProviders {
    provider: string; //Google, Credentials
    providerId: string;
}

export enum IsActive{
    ACTIVE = "ACTIVE",
    INACTIVE="INACTIVE",
    BLOCKED="BLOCKED",
}

export interface IUser {
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    isDeleted?: string;
    isActive?: IsActive;
    isVerified?: string;
    role: Role;
    auths: IAuthProviders[];

    bookings?: Types.ObjectId[];
    guides?: Types.ObjectId[]  //By those guides the user was guided, guide list from whom user get services
}