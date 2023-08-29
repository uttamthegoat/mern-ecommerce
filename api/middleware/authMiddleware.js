import asyncHandler from "./asyncHandler";
import jwt from "jsonwebtoken";
import User from '../models/userModel.js'
import CustomError from "../errors/CustomError";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
           throw new CustomError(401,false,"Not authorized , invalid token");
        }
    } else {
        throw new CustomError(401,false,"Not authorized , no token");
        
    }
})

module.exports={protect};