import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    username: string;
    login: string;
    password: string;
    pdfFile: string;
    imageFile: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5
    },
    login: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    pdfFile: {
        type: String,
        required: false,
        default: null
    },
    imageFile: {
        type: String,
        required: false,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<IUser>("User", UserSchema);
