import * as mongoose from 'mongoose';

export const registerUserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String
},{
    versionKey:false
});  