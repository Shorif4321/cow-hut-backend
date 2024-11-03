import { Model } from 'mongoose'

export type IUser = {
  password: string
  role: 'seller' | 'buyer'
  name: {
    firstName: {
      type: string
    }
    lastName: {
      type: string
    }
  }
  phoneNumber: string
  address: string
  budget: number
  income: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
