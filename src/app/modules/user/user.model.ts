import { model, Schema } from 'mongoose'
import { IUser, UserModel } from './user.interface'
import { role } from './user.contant'

export const UserSchema = new Schema<IUser, UserModel>(
  {
    password: { type: String, required: true },
    role: { type: String, enum: role },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const User = model<IUser, UserModel>('User', UserSchema)
