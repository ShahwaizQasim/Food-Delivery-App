import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    isAdmin: { type: Boolean, default: false },
    profileBio: {
      type: String,
      default: "Hey There you are using SMIT AUTOGRADE",
    },
    profilePic: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
    },
    createdAt: { type: Date, default: Date.now },
    isVerify: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.models.user || mongoose.model("user", UserSchema)