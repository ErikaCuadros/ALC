import { Schema } from "mongoose";

export const UserSchema = new Schema({
    name: String,
    email: String,
    pasword: String,
    createdAt: { type: Date, default: Date.now }
});